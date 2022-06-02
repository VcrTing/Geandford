<template>
    <layout-screen-form>
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-mr-sr-d-base-msg></cp-mr-sr-d-base-msg>
            </panel-def>
            <panel-def :head="'摘要'">
                <cp-mr-sr-d-abstract></cp-mr-sr-d-abstract>
            </panel-def>
            <panel-def>
                <cp-mr-sr-d-signa-pan></cp-mr-sr-d-signa-pan>
            </panel-def>
            <panel-def :head="'補充信息'">
                <cp-mr-sr-d-extra-info></cp-mr-sr-d-extra-info>
            </panel-def>
            <panel-def>
                <cp-mr-sr-d-photo></cp-mr-sr-d-photo>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import CpMrSrDAbstract from '../../../../component/monthly_report/safety_review/CpMrSrDAbstract.vue'
import CpMrSrDBaseMsg from '../../../../component/monthly_report/safety_review/CpMrSrDBaseMsg.vue'
import CpMrSrDExtraInfo from '../../../../component/monthly_report/safety_review/CpMrSrDExtraInfo.vue'
import CpMrSrDPhoto from '../../../../component/monthly_report/safety_review/CpMrSrDPhoto.vue'
import CpMrSrDSignaPan from '../../../../component/monthly_report/safety_review/CpMrSrDSignaPan.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
export default {
  components: { LayoutScreenForm, PanelDef, CpMrSrDBaseMsg, CpMrSrDAbstract, CpMrSrDSignaPan, CpMrSrDExtraInfo, CpMrSrDPhoto },

}
</script>

<style>

</style>