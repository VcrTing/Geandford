<template>
    <layout-screen-form @back="go('/admin/monthly_report/report_review')">
        <!--iayout-filter-full :mode="2" slot="bar"></!--iayout-filter-full-->
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-mr-rr-d-base-msg :load="loading" :one="detai"></cp-mr-rr-d-base-msg>
            </panel-def>

            <mr-rr-dc @paner="(v) => paner = v" class="upper" v-if="!loading" :one="detai"></mr-rr-dc>
            <div v-else class="py_x3 my_x3"><loading :size="0"></loading></div>

            <div class="py_s"></div>
            <panel-def v-if="!loading">
                <mr-rr-d-a v-if="paner == 0" :one="detai.accident"></mr-rr-d-a>
                <mr-rr-d-d v-if="paner == 1" :one="detai.damage"></mr-rr-d-d>
                <mr-rr-d-hi v-if="paner == 2" :one="detai.hazardous_incident"></mr-rr-d-hi>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrRrDA from './accident/MrRrDA.vue'
import MrRrRfi from './rfi/MrRrRfi.vue'
import MrRrDc from './danger_card/MrRrDc.vue'
import IayoutFilterFull from '../../../funcks/ui_layout/filter/IayoutFilterFull.vue'
import CpMrRrDBaseMsg from '../../../component/monthly_report/report_review/CpMrRrDBaseMsg.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
import MrRrDD from './damage/MrRrDD.vue'
import MrRrDHi from './hazardous_incident/MrRrDHi.vue'

export default {
    components: { LayoutScreenForm, PanelDef, UiPageEmpty, MrRrDA, MrRrRfi, MrRrDc, IayoutFilterFull, CpMrRrDBaseMsg, Loading, MrRrDD, MrRrDHi },
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
            let res = await this.serv.monthly.monthly_report(this, this.pro.uid + '/' + this.uid)

            console.log('RES =', res)
            
            this.detai = res
            setTimeout(e => this.loading = false, 300)
        },
    },
    data() {
        return {
            paner: 0,
            loading: true, detai: { }
        }
    }
}
</script>

<style>

</style>