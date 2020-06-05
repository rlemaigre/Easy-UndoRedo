import { Vue } from "vue-property-decorator";
import { Command } from "../ts/Command";
/**
 * This mixin grafts an undo redo stack on any component that incorporates it.
 */
export default class UndoRedoStackMixin extends Vue {
    isUndoRedoStack: boolean;
    undoStack: Command[];
    redoStack: Command[];
    saved: Command;
    get canUndo(): boolean;
    get undoLabel(): string;
    undo(): void;
    get canRedo(): boolean;
    get redoLabel(): string;
    get dirty(): boolean;
    redo(): void;
    execute(command: Command): void;
    markSaved(): void;
    reset(): void;
}
