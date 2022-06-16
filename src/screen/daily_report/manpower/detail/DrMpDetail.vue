<template>
    <layout-screen :cls_bar="''">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-dr-mp-base-msg v-if="!loading" :one="detai"></cp-dr-mp-base-msg>
                <loading v-else :size="0"></loading>
            </panel-def>
        </div>
    </layout-screen>
</template>

<script>
import CpDrMpBaseMsg from '../../../../component/daily_report/manpower/CpDrMpBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreen from '../../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { LayoutScreen, PanelDef, CpDrMpBaseMsg, Loading },
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
            let res = await this.view.get_ss('jianyi_worker') // this.serv.worker.worker(this, this.pro.uid + '/' + this.uid)

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