<template>
    <div>
        <v-row align="baseline">
            <v-col cols="auto">
                <v-text-field label="New tag" v-model="newTag" hide-details></v-text-field>
            </v-col>
            <v-col cols="auto">
                <v-btn @click="push(newTag), newTag = ''" dense>Add</v-btn>
            </v-col>
            <v-col>
                <v-fade-transition group class="tags">
                    <tag :model="tag" v-for="tag in tags" :key="tag.id" @remove="remove($event)"></tag>
                </v-fade-transition>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import TagModel from "@/ts/Tag";
    import Tag from "@/components/Tag.vue";

    @Component({
        components: {Tag}
    })
    export default class Tags extends Vue {

        tags: TagModel[] = [];
        newTag = "";

        created() {
            this.push("test1");
            this.push("test2");
        }

        push(tag: string) {
            this.tags.push(new TagModel(tag));
        }

        remove(tag: TagModel) {
            let index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
        }

    }
</script>

<style scoped lang="scss">

</style>