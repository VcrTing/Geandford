<template>
    <layout-screen-form>
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-dr-sp-d-base-msg></cp-dr-sp-d-base-msg>
            </panel-def>

            <h4 class="py">附件</h4>
            <div class="table-iine">
                <dr-sp-d-tr></dr-sp-d-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="many" :cls="''">
                    <dr-sp-d-td v-for="(v, i) in many" :key="i" :one="v"></dr-sp-d-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrSpDTr from './table/DrSpDTr.vue'
import DrSpDTd from './table/DrSpDTd.vue'
import CpDrSpDBaseMsg from '../../../../component/daily_report/safety_problem/CpDrSpDBaseMsg.vue'
export default {
  components: { LayoutScreenForm, PanelDef, UiPageEmpty, DrSpDTr, DrSpDTd, CpDrSpDBaseMsg },
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
            loading: true, many: [ 
                { }
            ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>