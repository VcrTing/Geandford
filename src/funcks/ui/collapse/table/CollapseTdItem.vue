<template>
    <nav class="collapse-item collapse-td-item" :class="{ 'collapse-active': open }">
        <button @click="self_change">
            <div class="fx-l">
                <icon-exp></icon-exp>
                <slot name="tit"></slot>
            </div>
            <slot name="extra"></slot>
        </button>
        <div :class="{ 'collapse-td-active': open }">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
import IconExp from '../../../ui_static/icon/IconExp.vue'
export default {
  components: { IconExp },
    props: [ 'def', 'cancel_self' ],
    data() { return { open: false } },
    mounted() { this.open = this.def ? true : false },
    methods: {
        self_change() {
            if (!this.cancel_self) {
                this.change()
            }
        },
        change() {
            const src = this.open
            this.$parent.change(false)
            this.open = !src
        }
    }
}
</script>
<style lang="sass" scoped>
.collapse-active
    & > div
        max-height: 160em
</style>