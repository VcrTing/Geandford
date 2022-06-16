<template>
    <layout-screen-form @back="go('/admin/table_download/perform')">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-td-of-d-base-msg :ioad="loading" :one="detai"></cp-td-of-d-base-msg>
            </panel-def>

            <h4 class="py">附件</h4>
            <ui-td-downioad :_ioad_size="0" :srcs="detai.files" :_ioad="loading" ></ui-td-downioad>
        </div>
    </layout-screen-form>
</template>

<script>
import CpTdOfDBaseMsg from '../../../../component/table/often/CpTdOfDBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTdDownioad from '../../../../funcks/ui_element/table/td_downioad/UiTdDownioad.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { LayoutScreenForm, PanelDef, Loading, CpTdOfDBaseMsg, UiTdDownioad },
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
            let res = await this.serv.table_download.perform_report(this, 'uid/' + this.uid)

            console.log('RES =', res)

            this.detai = res && res.length > 0 ? res[0] : {}
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