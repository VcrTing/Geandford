<template>
    <nav class="collapse-item collapse-menu-item" :class="{ 'collapse-active': open }">
        <button @click="change" class="fx-s" :class="{ 'collapse-button-active': open }">
            <slot name="tit"></slot>
            <i v-if="!no_suffix" class="mdi mdi-chevron-right collapse-i"></i>
        </button>
        <div>
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
export default {
    props: [ 'no_suffix' ],
    data() { return { open: false } },
    
    methods: {
        change() {
            const src = this.open
            this.$parent.change(false)
            this.open = !src
            this.$emit('change', this.open)
        }
    }
}
</script>
<style lang="sass">
.collapse-active
    & > div
        max-height: 20em
</style>