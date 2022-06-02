<template>
    <layout-screen-form>
        <div slot="cont">
            <panel-def :head="'基本信息'">
                <cp-mr-st-d-base-msg></cp-mr-st-d-base-msg>
            </panel-def>

            <panel-def :head="'安全和環境培訓'">
                <cp-mr-st-d-environ></cp-mr-st-d-environ>
            </panel-def>

            <h4 class="pb pt_s">當前期間主題談話清單</h4>
            <div class="panel-sim table-iine">
                <div class="td pl-ip_icon" v-for="(v, i) in many_taik" :key="i">{{ v.name }}</div>
            </div>

            <h4 class="pt_x2 pb">附件</h4>
            <div class="table-iine">
                <mr-st-d-tr></mr-st-d-tr>
                <ui-page-empty :cls="''" :is_page="false" :load="loading" :srcs="many">
                    <mr-st-d-td v-for="(v, i) in many" :key="i"></mr-st-d-td>
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
export default {
  components: { LayoutScreenForm, PanelDef, CpMrStDBaseMsg, CpMrStDEnviron, MrStDTr, UiPageEmpty, MrStDTd },
methods: {
        pagenation(n, ong, limit) {

        },
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 2400)
        },
    },
    data() {
        return {
            loading: true, 
            many_taik: [ { name: '電梯維修' }, { name: '大廳修整' } ],
            many: [ 
                { 
                    company_name: '劉總', project_name: '安全問題項目',
                    uid: 'manfulls-001;tst-002;00001', 
                    date: '2022-12-12 12:12', status: false
                } 
            ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>