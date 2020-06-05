Easy-UndoRedo is a very simple implementation of a typical undo redo stack for VueJS.

# Installation

Install via [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)

```bash
# Use npm
npm install vue-easy-undoredo --save

# Use yarn
yarn add vue-easy-undoredo
```

# Demo

https://codesandbox.io/s/easy-undoredo-demo-1t17q

![demo](img/demo.gif)

# Content of the library

## Mixins

The library defines two mixins :

 * `UndoRedoStackMixin` : grafts an undo redo stack on any component that incorporates it
 * `UndoRedoClientMixin` : provides easy access to the nearest component in the ancestor chain with an undo redo stack grafted onto it 
 
## Interfaces
 The library defines one interface : `Command`.
 
# Command interface
 
 A command is an object that can be placed onto an undo redo stack for execution.
 
 Commands simply updates (forward and backward) whatever data model drives the UI. Provided the data model is reactive, Vue will update the UI according to whatever modification the command applied to the model, as it usually does.
 
 ALL modifications of the model must be done by using commands.
 
 A command must implement three methods :
  * `redo(first: boolean): void` : Executed when the command is put initially onto the stack (in that case first = true) or when it must be played forward (in that case first = false).
  * `undo(): void` : Executed when the command must be played backward.
  * `label() : string` : Returns the label of the command if any.
 
# UndoRedoStackMixin
 
 An undo redo stack is actually two stacks :
  * The stack of commands that can be undone (`undoStack` data of the UndoRedoStack mixin)
  * The stack of commands that can be redone (`redoStack` data of the UndoRedoStack mixin)
   
## Methods
 
  * `execute(command: Command): void` : executes the given command, puts it on the `undoStack` and flushes the `redoStack`
  * `undo(): void` : calls undo on the command on top of the `undoStack` and moves it to the `redoStack`
  * `redo(): void` : calls redo on the command on top of the `redoStack` and moves it to the `undoStack`
  * `reset() : void` : flushes both stacks
  * `markSaved() : void` : informs the stack that the data model has just been saved. See the `dirty` computed field for the usefulness of this.
  
## Computed

 * `canUndo : boolean` : true if there are commands on the `undoStack`
 * `canRedo : boolean` : true if there are commands on the `redoStack`
 * `undoLabel : string` : the label of the command on top of the `undoStack`
 * `redoLabel : string` : the label of the command on top of the `redoStack`
 * `dirty : boolean` : true if the model has unsaved changes given the current state of the stack
 
# UndoRedoClientMixin
 
 Simply provides one computed : `undoRedoStack`. Returns the nearest component in the ancestor chain with an undo redo stack grafted onto it.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 