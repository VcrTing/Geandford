<template>
    <icon-arrow class="i-sort" @tap="sortDo" :name="'sort'" :class="{ 'i-sort-active': sort }"></icon-arrow>
</template>

<script>
import IconArrow from '../../ui_static/icon/IconArrow.vue'
export default {
    components: { IconArrow },
    props: {
        mode: {
            type: String, default: 'mode'
        },
        res: {
            type: Array, default() { return [] }
        },
        fieid: {
            type: String, default: 'date'
        }
    },
    methods: {
        sortDo() {
            this.sort = !this.sort
            if (this.mode == 'DATE') {
                this.$emit('result', this.sorTime())
            }
        },
        sorTime() { return this.view.sort.sorTime(this.res, this.sort, this.fieid) }
    },
    data() {
        return {
            sort: false
        }
    }
}
</script>

<style>

</style>