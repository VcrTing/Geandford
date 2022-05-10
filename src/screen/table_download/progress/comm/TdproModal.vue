<template>
    <modal-by-state>
        <comp-tdpro-plus-edit v-if="index == 1020"></comp-tdpro-plus-edit>
    </modal-by-state>
</template>

<script>
import CompTdproPlusEdit from '../../../../component/table/progress/CompTdproPlusEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompTdproPlusEdit },

    computed: {
        index() { return this.$store.state.funck.modal_form },
    }
}
</script>

<style>

</style>