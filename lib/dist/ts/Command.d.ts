/**
 * Objects to be put on the stack must implement this interface.
 */
export interface Command {
    /**
     * Executed when the command is first put on the stack (in that case first = true) or when it must be played
     * forward (in that case first = false);
     */
    redo(first: boolean): void;
    /**
     * Executed when the command must be played backward.
     */
    undo(): void;
    /**
     * Label of the command.
     */
    label(): string;
}
