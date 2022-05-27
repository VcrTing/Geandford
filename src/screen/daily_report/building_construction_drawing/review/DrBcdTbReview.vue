<template>
    <layout-screen-form>
        <div slot="cont">
            
            <panel-def :head="'基本信息'">
                <cp-bcd-tr-base-msg></cp-bcd-tr-base-msg>
            </panel-def>

            <panel-def :head="'上传细节'">
                <cp-bcd-tr-up-msg></cp-bcd-tr-up-msg>
            </panel-def>

            <panel-def :head="'备注'">
                <cp-bcd-tv-mark-msg></cp-bcd-tv-mark-msg>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import CpBcdTrUpMsg from '../../../../component/daily_report/table_review/CpBcdTrUpMsg.vue'
import CpBcdTrBaseMsg from '../../../../component/daily_report/table_review/CpBcdTrBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import CpBcdTvMarkMsg from '../../../../component/daily_report/table_review/CpBcdTvMarkMsg.vue'
export default {
    components: {
        PanelDef,
        CpBcdTrUpMsg,
        CpBcdTrBaseMsg,
        CpBcdTvMarkMsg,
        LayoutScreenForm,
    }
}
</script>

<style>

</style>