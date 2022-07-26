<template>
    <layout-screen-form @back="go('/admin/weekly_report')">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-wr-d-base-msg :load="loading" :one="detai"></cp-wr-d-base-msg>
            </panel-def>
            <div class="pt pb_x3">
                <ui-pri-thin-choise-tab @tap="(v) => { tab = v }" :iist="tabs"></ui-pri-thin-choise-tab>
            </div>
            <cp-wr-d-tab-item v-if="!loading" :load="loading" :item="paner"></cp-wr-d-tab-item>
            <!--panel-def :head="'木板路'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'梯'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'通道'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>
            <panel-def :head="'其他'"><cp-weekly-thing-msgs></cp-weekly-thing-msgs></panel-def>-->
        </div>
    </layout-screen-form>
</template>

<script>
import PanelDef from '@/funcks/ui/panel/PanelDef.vue'
import CpWeeklyThingMsgs from '@/component/weekly/msg/CpWeeklyThingMsgs.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiPriThinChoiseTab from '../../../../funcks/ui_view/tab/UiPriThinChoiseTab.vue'
import CpWrDBaseMsg from '../../../../component/weekly/weekly/CpWrDBaseMsg.vue'
import CpWrDTabItem from '../../../../component/weekly/weekly/CpWrDTabItem.vue'
export default {
  components: { PanelDef, CpWeeklyThingMsgs, LayoutScreenForm, UiPriThinChoiseTab, CpWrDBaseMsg, CpWrDTabItem },
  computed: {  
    pro() { return this.$store.state.project },
    uid() { return this.$route.query.id },

    tabs() {
        return [
            { dt: this.detai.entrance, txt: '進出途徑' },
            { dt: this.detai.general, txt: '壹般事項' },
            { dt: this.detai.work_at_height, txt: '高空作業' },
            { dt: this.detai.weight_lifting, txt: '起重器械及起重裝置' },
            { dt: this.detai.electricity, txt: '電力' },
            { dt: this.detai.machinery, txt: '機器' },
            { dt: this.detai.fire_prevention, txt: '防火措施' },
            { dt: this.detai.health_and_safety, txt: '健康' },
            { dt: this.detai.personal_safety_item, txt: '個人防護設備' },
        ]
    },
    paner() {
        let res = this.tabs[ this.tab ].dt
        return res ? res : null
    }
  },

  mounted() {
      this.fetching()
  },
  methods: {
      async fetching() {
          this.loading = true
          let res = await this.serv.weekly.one(this, this.pro.uid + '/' + this.uid)
          console.log('RES =', res)
          this.detai = res
          setTimeout(e => this.loading = false, 300)
      },

  },
  data() {
      return {
          tab: 0,
          loading: true, detai: { }
      }
  }
}
</script>

<style>

</style>