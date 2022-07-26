<template>
    <layout-screen-form :back="false">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-cost-statistic-base-msg v-if="!loading" :one="detai"></cp-cost-statistic-base-msg>
                <loading v-else :size="0"></loading>
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import CpCostStatisticBaseMsg from '../../../component/project/cost/CpCostStatisticBaseMsg.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { LayoutScreenForm,
        PanelDef,
        CpCostStatisticBaseMsg,
        Loading },
 computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'date:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            let res = await this.serv.pro_expense.pro_expense(this, this.pro.uid, cond)
            this.detai = res
            console.log('數據 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ], detai: {},
            many_origin: [ ], iimit: 30
        }
    },
    mounted() { this.funni() }
}
</script>

<style>

</style>