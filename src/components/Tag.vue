<template>
    <v-chip class="ma-2" color="primary" close @click:close="$emit('remove', model)">{{model.label}}</v-chip>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import TagModel from "@/ts/Tag";

    @Component({})
    export default class Tag extends Vue {

        @Prop()
        model: TagModel;

    }
</script>

<style scoped lang="scss">

</style>