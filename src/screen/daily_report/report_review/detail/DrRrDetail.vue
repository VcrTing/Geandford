<template>
    <layout-screen-form>
        <div slot="cont" class="">
          <!--ui-step-tab @tab="changeTab"></！ui-step-tab>
          <div-- class="py"></div-->

          <!-- 填写基本信息 -->
          <div v-if="tab == 1">
            <panel-def :head="'基本信息'">
              <cp-dr-rr-d-base-msg></cp-dr-rr-d-base-msg>
            </panel-def>

            <h4 class="py">工地现场工作</h4>

            <div class="row_x2 fx-s fx-t">
              <div class="px_s w-50">
                <card-construction-work :head="'任务'"></card-construction-work>
              </div>
              <div class="px_s w-50">
                <card-construction-work :head="'状态'"></card-construction-work>
              </div>
            </div>
          </div>
          <!-- 填写联络人信息 -->
          <div>
            <h4 class="py">联系人</h4>
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
        { id: 1, txt: '这里是任务详情详情详情，任务第一个，任务快乐快乐快乐快乐的房屋之建筑' },
        { id: 2, txt: '这里是任务详情详情详情，任务第一个，任务快乐快乐快乐快乐的房屋之建筑' }
      ],
      stat: [
        { id: 1, txt: '这里是任务状态状态状态，任务第一个，任务快乐快乐快乐快乐的房屋之建筑' },
        { id: 2, txt: '这里是任务状态状态状态，任务第一个，任务快乐快乐快乐快乐的房屋之建筑' }
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