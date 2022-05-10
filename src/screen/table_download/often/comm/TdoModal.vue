<template>
    <modal-by-state>
        <comp-tdo-plus-edit v-if="index == 1010"></comp-tdo-plus-edit>
    </modal-by-state>
</template>

<script>
import CompTdoPlusEdit from '../../../../component/table/often/CompTdoPlusEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompTdoPlusEdit },

    computed: {
        index() { return this.$store.state.funck.modal_form },
    }
}
</script>

<style>

</style>