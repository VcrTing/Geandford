<template>
    <layout-screen :cls_bar="''">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-pro-company-basic></cp-pro-company-basic>
            </panel-def>
            <panel-def :head="'相關資料'">
                <cp-weekly-about-msg></cp-weekly-about-msg>
            </panel-def>
            <panel-def :head="'木板路'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'梯'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'通道'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'其他'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import CpProCompanyBasic from '../../../component/project/basic/CpProCompanyBasic.vue'
import CpWeeklyAboutMsg from '../../../component/weekly/msg/CpWeeklyAboutMsg.vue'
import CpWeeklyThingMsgs from '../../../component/weekly/msg/CpWeeklyThingMsgs.vue'
export default {
  components: { LayoutScreen, PanelDef, CpProCompanyBasic, CpWeeklyAboutMsg, CpWeeklyThingMsgs },

}
</script>

<style>

</style>