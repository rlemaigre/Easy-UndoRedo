import {Command} from "../../../lib/src/ts/Command";
import Tag from "@/ts/Tag";

export default class RemoveCommand implements Command {

    index: number;

    constructor(public tags: Tag[], public toRemove: Tag) {
        this.index = this.tags.indexOf(toRemove);
    }

    label(): string {
        return "Remove tag";
    }

    redo(first: boolean): void {
        this.tags.splice(this.index, 1);
    }

    undo(): void {
        this.tags.splice(this.index, 0, this.toRemove);
    }

}