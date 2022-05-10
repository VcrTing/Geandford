<template>
    <div class="fx-l cus-def">
        <span class="pr_t">{{ txt }}</span>
        <i class="mdi mdi-truck-cargo-container h5 pri"></i>
    </div>
</template>
<script>
export default {
    props: [ '_typed' ],
    computed: {
        txt() {
            return this._typed == 0 ? '送貨' : '自取'
        }
    }
}
</script>
<style lang="sass">
.pr_t
    padding-right: 0.42em !important
</style>