<template>
    <layout-screen-form @back="go('/admin/daily_report/report_review/')">
        <div slot="cont" class="">

          <!-- 填寫基本信息 -->
          <div v-if="tab == 1">
            <panel-def :head="'基本信息'">
              <cp-dr-rr-d-base-msg :one="detai"></cp-dr-rr-d-base-msg>
            </panel-def>
            <h4 class="py">工地現場工作</h4>
            <card-construction-work :items="detai.task" :head="'任務'"></card-construction-work>
          </div>

          <!-- 附件 -->
          <h4 class="pb">附件</h4>
          <ui-td-downioad :_is_pi="true" :_cis="'br bxs o-h'" :_ioad_size="0" :_ioad="loading" :srcs="detai.pdf_report"></ui-td-downioad>

          <!-- 填寫聯絡人信息 -->
          <h4 class="pb pt_x2">聯系人</h4>
          <dr-rr-dc :one="detai"></dr-rr-dc>
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
import UiTdDownioad from '../../../../funcks/ui_element/table/td_downioad/UiTdDownioad.vue'
export default {
  components: { LayoutScreenForm, UiStepTab, PanelDef, CpDrRrDBaseMsg, DrRrDc, CardConstructionWork, UiTdDownioad },
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
      loading: true, detai: { }
    }
  },
  computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },
    },
    mounted() {
        this.fetching()
    },
    methods: {
        async fetching() {
            this.loading = true
            let res = await this.serv.daily.daily_report(this, this.pro.uid + '/' + this.uid)

            console.log('RES =', res)

            this.detai = res
            setTimeout(e => this.loading = false, 300)
        },
    }
}
</script>

<style>

</style>