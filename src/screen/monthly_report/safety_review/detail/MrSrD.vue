<template>
    <layout-screen-form @back="go('/admin/monthly_report/safety_review/')">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-mr-sr-d-base-msg :load="loading" :one="detai"></cp-mr-sr-d-base-msg>
            </panel-def>
            <panel-def :head="'摘要'">
                <cp-mr-sr-d-abstract v-if="!loading" :one="detai"></cp-mr-sr-d-abstract>
                <loading v-else :size="0"></loading>
            </panel-def>
            <panel-def>
                <cp-mr-sr-d-signa-pan v-if="!loading" :one="detai"></cp-mr-sr-d-signa-pan>
                <loading v-else :size="0"></loading>
            </panel-def>
            <panel-def :head="'補充信息'">
                <cp-mr-sr-d-extra-info :load="loading" :one="detai"></cp-mr-sr-d-extra-info>
            </panel-def>
            <panel-def>
                <cp-mr-sr-d-photo :load="loading" :one="detai"></cp-mr-sr-d-photo>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import CpMrSrDBaseMsg from '../../../../component/monthly_report/safety_review/CpMrSrDBaseMsg.vue'
import CpMrSrDAbstract from '../../../../component/monthly_report/safety_review/CpMrSrDAbstract.vue'
import CpMrSrDExtraInfo from '../../../../component/monthly_report/safety_review/CpMrSrDExtraInfo.vue'
import CpMrSrDPhoto from '../../../../component/monthly_report/safety_review/CpMrSrDPhoto.vue'
import CpMrSrDSignaPan from '../../../../component/monthly_report/safety_review/CpMrSrDSignaPan.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { LayoutScreenForm, PanelDef, CpMrSrDBaseMsg, CpMrSrDAbstract, CpMrSrDSignaPan, CpMrSrDExtraInfo, CpMrSrDPhoto, Loading },
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
            let res = await this.serv.monthly.safety_review(this, this.pro.uid + '/' + this.uid)

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