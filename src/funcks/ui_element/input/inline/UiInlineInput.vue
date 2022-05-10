<template>
    <nav class="fx-l input-inline" :class="{ 'input-inline-fill': _fill }">
        <label :class="_class">
            <span v-html="header"></span>&nbsp;
        </label>
        <div :class="{ 'input-err': is_err }">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String, default: "label-inline" },
        _fill: { type: Boolean, default: false }
    },
}
</script>

<style lang="sass">
</style>