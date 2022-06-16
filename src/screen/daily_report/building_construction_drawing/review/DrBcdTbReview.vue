<template>
    <layout-screen-form @back="go('/admin/daily_report/building_construction_drawing')">
        <div slot="cont">
            
            <panel-def :head="'基本信息'">
                <cp-bcd-tr-base-msg :ioad="loading" :one="detai"></cp-bcd-tr-base-msg>
            </panel-def>

            <div v-if="!loading">
                <panel-def :head="'上傳細節'">
                    <cp-bcd-tr-up-msg :ioad="loading" :one="detai"></cp-bcd-tr-up-msg>
                </panel-def>

                <panel-def :head="'備註'">
                    <cp-bcd-tv-mark-msg :ioad="loading" :one="detai"></cp-bcd-tv-mark-msg>
                </panel-def>
            </div>
            <loading v-else></loading>
        </div>
    </layout-screen-form>
</template>

<script>
import CpBcdTrUpMsg from '../../../../component/daily_report/table_review/CpBcdTrUpMsg.vue'
import CpBcdTrBaseMsg from '../../../../component/daily_report/table_review/CpBcdTrBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import CpBcdTvMarkMsg from '../../../../component/daily_report/table_review/CpBcdTvMarkMsg.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: {
        PanelDef,
        CpBcdTrUpMsg,
        CpBcdTrBaseMsg,
        CpBcdTvMarkMsg,
        LayoutScreenForm,
        Loading,
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
            let res = await this.serv.daily.drawing_form(this, 'uid/' + this.uid, {})

            console.log('RES =', res)

            this.detai = res && res.length > 0 ? res[0] : null
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