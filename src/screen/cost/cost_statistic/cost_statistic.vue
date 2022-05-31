<template>
    <layout-screen-form :back="false">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-cost-statistic-base-msg></cp-cost-statistic-base-msg>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import CpCostStatisticBaseMsg from '../../../component/cost/CpCostStatisticBaseMsg.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
export default {
    components: { LayoutScreenForm,
        PanelDef,
        CpCostStatisticBaseMsg },

}
</script>

<style>

</style>