<template>
    <layout-screen-form>
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-dr-if-base-msg></cp-dr-if-base-msg>
            </panel-def>

            <h4 class="py">附件</h4>
            <div class="table-iine">
                <dr-if-d-tr></dr-if-d-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="many" :cls="''">
                    <dr-if-d-td v-for="(v, i) in many" :key="i" :one="v"></dr-if-d-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import CpDrIfBaseMsg from '../../../../component/daily_report/infi_factor/CpDrIfBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import DrIfDTr from './table/DrIfDTr.vue'
import DrIfDTd from './table/DrIfDTd.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
export default {
  components: { LayoutScreenForm, CpDrIfBaseMsg, PanelDef, DrIfDTr, DrIfDTd, UiPageEmpty },
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