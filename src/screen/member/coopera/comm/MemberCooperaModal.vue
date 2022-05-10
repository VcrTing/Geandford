<template>
    <modal-by-state>
        <comp-m-c-plus-edit v-if="index == 1001"></comp-m-c-plus-edit>
    </modal-by-state>
</template>

<script>
import CompMCPlusEdit from '@/component/member/coopera/CompMCPlusEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState,
    CompMCPlusEdit },

    computed: {
        index() { return this.$store.state.funck.modal_form },
    }
}
</script>

<style>

</style>