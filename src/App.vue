<template>
    <v-app>
        <v-content style="margin: 30px">
            <v-row>
                <v-col cols="auto">
                    <v-btn @click="undo" :disabled="!canUndo">Undo</v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn @click="redo" :disabled="!canRedo">Redo</v-btn>
                </v-col>
            </v-row>
            <tags></tags>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {mixins} from "vue-class-component";
    import UndoRedoStack from "../lib/src/mixins/UndoRedoStack";
    import Tags from "@/components/Tags.vue";

    @Component({
        components: {Tags}
    })
    export default class App extends mixins(UndoRedoStack) {

        undo() {
            this.undo();
        }

        redo() {
            this.redo()
        }

    }
</script>

<style lang="scss">
    html, body, #app, .v-application--wrap, .v-content, .v-content__wrap {
        height: 100%;
    }

    .drop-in {
        box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
    }
</style>