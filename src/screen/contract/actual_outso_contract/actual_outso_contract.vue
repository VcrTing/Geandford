<template>
    <layout-screen>
        <iayout-filter-full 
            :mode="2" :param_time_1="'date_lte'"
            @sign="funni"
            slot="bar"></iayout-filter-full>

        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-expect-outso-base-msg></cp-expect-outso-base-msg>
            </panel-def>
            <h4 class="pt_s pb">合同資料</h4>

            <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong" :is_page="false" :load="loading" :srcs="many_origin">
                <div class="row_x2 f-row ">
                    <div class="w-333 w-25-x" v-for="(v, i) in many_origin" :key="i">
                        <card-outso-contract-actual :one="v" class=""></card-outso-contract-actual>
                    </div>
                </div>
            </ui-page-empty>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import CpExpectOutsoBaseMsg from '../../../component/contract/expect/CpExpectOutsoBaseMsg.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import IayoutFilterFull from '../../../funcks/ui_layout/filter/IayoutFilterFull.vue'
import CardOutsoContractActual from '../../../funcks/ui/card/contract/CardOutsoContractActual.vue'

export default {
    components: {
        LayoutScreen,
        PanelDef,
        CpExpectOutsoBaseMsg,
        UiPageEmpty,
        IayoutFilterFull,
        CardOutsoContractActual
    },
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
            let res = await this.serv.contract.contract(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('数据 Contract =', res)
        },
    },
    data() {
        return {
            loading: true, many: [
                
            ], many_origin: [ ], iimit: 30
        }
    }
}
</script>

<style lang="sass">
.f-row
    justify-content: left !important
</style>