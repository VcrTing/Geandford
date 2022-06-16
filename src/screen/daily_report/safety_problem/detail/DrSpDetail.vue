<template>
    <layout-screen-form @back="go('/admin/daily_report/safety_problem')">
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-dr-sp-d-base-msg :ioad="loading" :one="item"></cp-dr-sp-d-base-msg>
            </panel-def>

            <h4 class="py">附件</h4>
            <div class="table-iine">
                <dr-sp-d-tr></dr-sp-d-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="item.files" :cls="''">
                    <dr-sp-d-td v-for="(v, i) in item.files" :key="i" :one="v"></dr-sp-d-td>
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
        async fetching() {
            this.loading = true
            let res = await this.serv.daily.safety_issue(this, 'uid/' + this.uid, null)
            this.item = res && res.length > 0 ? res[ 0 ] : {}
            console.log('詳情結果 =', this.item)
            setTimeout(e => this.loading = false, 2400)
        },
    },
    computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },
    },
    data() {
        return {
            loading: true, item: {},
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>