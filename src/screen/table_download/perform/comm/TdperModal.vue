<template>
    <modal-by-state>
        <comp-tdpf-plus-edit v-if="index == 1030"></comp-tdpf-plus-edit>
    </modal-by-state>
</template>

<script>
import CompTdpfPlusEdit from '../../../../component/table/perform/CompTdpfPlusEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompTdpfPlusEdit },

    computed: {
        index() { return this.$store.state.funck.modal_form },
    }
}
</script>

<style>

</style>