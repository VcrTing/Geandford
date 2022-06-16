<template>
    <layout-screen-form @back="go('/admin/monthly_report/safety_training/')">
        <div slot="cont">
            <panel-def :head="'基本信息'">
                <cp-mr-st-d-base-msg :load="loading" :one="detai"></cp-mr-st-d-base-msg>
            </panel-def>

            <panel-def :head="'安全和環境培訓'">
                <cp-mr-st-d-environ v-if="!loading" :one="detai"></cp-mr-st-d-environ>
                <loading v-else :size="0"></loading>
            </panel-def>

            <h4 class="pb pt_s">當前期間主題談話清單</h4>
            <div class="panel-sim table-iine" v-if="!loading">
                <div class="td pl-ip_icon" v-for="(v, i) in detai.current_topic" :key="i">{{ v.topic }}</div>
            </div>
            <div v-else>
                <div class="py"></div>
                <loading :size="0"></loading>
                <div class="py"></div>
            </div>

            <h4 class="pt_x2 pb">附件</h4>
            <div class="table-iine">
                <mr-st-d-tr></mr-st-d-tr>
                <ui-page-empty :ioad_size="0" :cls="''" :is_page="false" :load="loading" :srcs="detai.attachment">
                    <mr-st-d-td v-for="(v, i) in detai.attachment" :key="i" :one="v"></mr-st-d-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen-form>
</template>

<script>
import CpMrStDBaseMsg from '../../../../component/monthly_report/safety_training/CpMrStDBaseMsg.vue'
import CpMrStDEnviron from '../../../../component/monthly_report/safety_training/CpMrStDEnviron.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrStDTd from './table/MrStDTd.vue'
import MrStDTr from './table/MrStDTr.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'

export default {
  components: { LayoutScreenForm, PanelDef, CpMrStDBaseMsg, CpMrStDEnviron, MrStDTr, UiPageEmpty, MrStDTd, Loading },
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
            let res = await this.serv.monthly.safety_training(this, this.pro.uid + '/' + this.uid)

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