import {Component, Vue} from "vue-property-decorator";
import {Command} from "../ts/Command";
import UndoRedoStack from "./UndoRedoStack";

/**
 * This mixin provide easy access to the nearest undo redo stack in the ancestor chain of components that incorporate it.
 */
@Component({})
export default class UndoRedoClient extends Vue {

    /**
     * The nearest undo redo stack in the ancestor chain or null of none exists.
     */
    get undoRedoStack() {
        return this.getAncestorWithProperty("isUndoRedoZone") as UndoRedoStack;
    }

    protected getAncestorWithProperty(propertyName: string) {
        let comp = this as Vue;
        do {
            if (propertyName in comp["_data"]) break;
            else comp = comp.$parent;
        }
        while (comp);
        return comp;
    }

}

