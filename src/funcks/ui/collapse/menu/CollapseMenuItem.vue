<template>
    <nav class="collapse-item collapse-menu-item" :class="{ 'collapse-active': open }">
        <button @click="change" class="fx-s" :class="{ 'collapse-button-active': open }">
            <slot name="tit"></slot>
            <icon-arrow :name="'menu'" class="collapse-i"></icon-arrow>
        </button>
        <div>
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
import IconArrow from "../../../ui_static/icon/IconArrow.vue"

export default {
    components: { IconArrow },
    props: [ 'no_suffix', 'def' ],
    data() { return { open: false } },
    mounted() {
        this.open = this.def ? true : false
    },
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