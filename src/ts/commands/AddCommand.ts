import {Command} from "../../../lib/src/ts/Command";
import Tag from "@/ts/Tag";

export default class AddCommand implements Command {

    constructor(public tags: Tag[], public newTag: Tag) {
    }

    label(): string {
        return "Add tag";
    }

    redo(first: boolean): void {
        this.tags.push(this.newTag);
    }

    undo(): void {
        this.tags.pop();
    }

}