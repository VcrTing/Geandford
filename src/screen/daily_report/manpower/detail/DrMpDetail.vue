<template>
    <layout-screen :cls_bar="''">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-dr-mp-base-msg></cp-dr-mp-base-msg>
            </panel-def>
        </div>
    </layout-screen>
</template>

<script>
import CpDrMpBaseMsg from '../../../../component/daily_report/manpower/CpDrMpBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreen from '../../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
export default {
  components: { LayoutScreen, PanelDef, CpDrMpBaseMsg },

}
</script>

<style>

</style>