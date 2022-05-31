<template>
    <layout-screen-form :back="false">
        <div class="w-100" slot="cont">
            <div class="fx-s pb_x2">
                <div class="w-22"></div>
                <div class="w-46">
                    <ui-contract-step-tab @tab="(v) => tb = v"></ui-contract-step-tab>
                </div>
                <div class="w-22 t-r">
                    <button class="btn-pri_thin px_x2 py_s">返回</button>
                    <span class="px_s"></span>
                    <button class="btn-pri px_x2 py_s">下一页</button>
                </div>
            </div>
            <aoc-d-paner-one v-if="tb == 1"></aoc-d-paner-one>
            <aoc-d-paner-two v-else-if="tb == 2"></aoc-d-paner-two>
            
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiContractStepTab from '../../../../funcks/ui_view/tab/UiContractStepTab.vue'
import AocDPanerOne from './AocDPanerOne.vue'
import AocDPanerTwo from './AocDPanerTwo.vue'

export default {
    components: {
        LayoutScreenForm,
        UiContractStepTab,
        AocDPanerOne,
        AocDPanerTwo,
    },
    data() {
        return {
            tb: 1
        }
    }
}
</script>

<style>

</style>