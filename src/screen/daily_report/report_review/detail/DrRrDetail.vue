<template>
    <layout-screen-form>
        <div slot="cont" class="">
          <!--ui-step-tab @tab="changeTab"></！ui-step-tab>
          <div-- class="py"></div-->

          <!-- 填寫基本信息 -->
          <div v-if="tab == 1">
            <panel-def :head="'基本信息'">
              <cp-dr-rr-d-base-msg></cp-dr-rr-d-base-msg>
            </panel-def>

            <h4 class="py">工地現場工作</h4>

            <div class="row_x2 fx-s fx-t">
              <div class="px_s w-50">
                <card-construction-work :head="'任務'"></card-construction-work>
              </div>
              <div class="px_s w-50">
                <card-construction-work :head="'狀態'"></card-construction-work>
              </div>
            </div>
          </div>
          <!-- 填寫聯絡人信息 -->
          <div>
            <h4 class="py">聯系人</h4>
            <dr-rr-dc></dr-rr-dc>
          </div>
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiStepTab from '../../../../funcks/ui_view/tab/UiStepTab.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import CpDrRrDBaseMsg from '../../../../component/daily_report/report_review/CpDrRrDBaseMsg.vue'
import DrRrDc from './contact/DrRrDc.vue'
import CardConstructionWork from '../../../../funcks/ui/card/construction/CardConstructionWork.vue'
export default {
  components: { LayoutScreenForm, UiStepTab, PanelDef, CpDrRrDBaseMsg, DrRrDc, CardConstructionWork },
  data() {
    return {
      tab: 1,
      task: [
        { id: 1, txt: '這裏是任務詳情詳情詳情，任務第壹個，任務快樂快樂快樂快樂的房屋之建築' },
        { id: 2, txt: '這裏是任務詳情詳情詳情，任務第壹個，任務快樂快樂快樂快樂的房屋之建築' }
      ],
      stat: [
        { id: 1, txt: '這裏是任務狀態狀態狀態，任務第壹個，任務快樂快樂快樂快樂的房屋之建築' },
        { id: 2, txt: '這裏是任務狀態狀態狀態，任務第壹個，任務快樂快樂快樂快樂的房屋之建築' }
      ],
    }
  },
  methods: {
    changeTab(v) { this.tab = v }
  }
}
</script>

<style>

</style>