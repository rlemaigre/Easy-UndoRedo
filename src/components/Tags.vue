<template>
    <div>
        <v-row align="baseline">
            <v-col cols="auto">
                <v-text-field label="New tag" v-model="newTag" hide-details></v-text-field>
            </v-col>
            <v-col cols="auto">
                <v-btn @click="addNewTag" dense :disabled="!newTag">Add</v-btn>
            </v-col>
            <v-col>
                <v-fade-transition group class="tags">
                    <tag :model="tag" v-for="tag in tags" :key="tag.id" @remove="removeTag($event)"></tag>
                </v-fade-transition>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import TagModel from "@/ts/Tag";
    import Tag from "@/components/Tag.vue";
    import UndoRedoClient from "../../lib/src/mixins/UndoRedoClient";
    import {mixins} from "vue-class-component";
    import AddCommand from "@/ts/commands/AddCommand";
    import RemoveCommand from "@/ts/commands/RemoveCommand";

    @Component({
        components: {Tag}
    })
    export default class Tags extends mixins(UndoRedoClient) {

        tags: TagModel[] = [];
        newTag = "";

        addNewTag() {
            this.undoRedoStack.execute(new AddCommand(this.tags, new TagModel(this.newTag)));
            this.newTag = "";
        }

        removeTag(tag: TagModel) {
            this.undoRedoStack.execute(new RemoveCommand(this.tags, tag));
        }

    }
</script>

<style scoped lang="scss">

</style>