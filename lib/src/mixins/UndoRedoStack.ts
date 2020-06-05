import {Component, Vue} from "vue-property-decorator";
import {Command} from "../ts/Command";

/**
 * This mixin grafts an undo redo stack on any component that incorporates it.
 */
@Component({})
export default class UndoRedoStack extends Vue {

    isUndoRedoStack = true;
    undoStack: Command[] = [];
    redoStack: Command[] = [];
    saved: Command = null;

    public get canUndo() {
        return this.undoStack.length > 0;
    }

    public get undoLabel() {
        return this.undoStack[this.undoStack.length - 1].label();
    }

    public undo() {
        let command = this.undoStack[this.undoStack.length - 1];
        this.undoStack = this.undoStack.slice(0, this.undoStack.length - 1);
        this.redoStack.push(command);
        command.undo();
    }

    public get canRedo() {
        return this.redoStack.length > 0;
    }

    public get redoLabel() {
        return this.redoStack[this.redoStack.length - 1].label();
    }

    public get dirty() {
        if (this.saved === null) {
            return this.undoStack.length !== 0;
        } else {
            return this.undoStack[this.undoStack.length - 1] !== this.saved;
        }
    }

    public redo() {
        let command = this.redoStack[this.redoStack.length - 1];
        this.redoStack = this.redoStack.slice(0, this.redoStack.length - 1);
        this.undoStack.push(command);
        command.redo(false);
    }

    public execute(command: Command) {
        command.redo(true);
        this.redoStack = [];
        this.undoStack.push(command);
    }

    public markSaved() {
        this.saved = this.undoStack[this.undoStack.length - 1];
    }

    public reset() {
        this.undoStack = [];
        this.redoStack = [];
        this.saved = null;
    }

}

