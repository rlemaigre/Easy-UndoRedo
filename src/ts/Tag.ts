export default class Tag {

    private static nextId = 0;

    id: number;

    constructor(public label: string) {
        this.id = Tag.nextId;
        Tag.nextId++;
    }

}