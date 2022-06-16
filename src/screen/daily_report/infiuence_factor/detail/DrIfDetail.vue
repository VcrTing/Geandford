<template>
    <layout-screen-form @back="go('/admin/daily_report/infi_factor')">
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-dr-if-base-msg :load="loading" :one="item"></cp-dr-if-base-msg>
            </panel-def>

            <h4 class="py">附件</h4>
            <div class="table-iine">
                <dr-if-d-tr></dr-if-d-tr>
                <ui-page-empty :ioad_size="0" :is_page="false" :load="loading" :srcs="item.attachment" :cls="''">
                    <dr-if-d-td v-for="(v, i) in item.attachment" :key="i" :one="v"></dr-if-d-td>
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
        async fetching() {
            this.loading = true
            let res = await this.serv.daily.affecting_factor(this, this.pro.uid + '/' + this.uid, null)
            this.item = res
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