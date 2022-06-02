<template>
    <layout-screen>
        <layout-filter-full slot="bar"></layout-filter-full>

        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-expect-outso-base-msg></cp-expect-outso-base-msg>
            </panel-def>
            <h4 class="pt_s pb">合同資料</h4>

            <ui-page-empty :is_page="false" :load="loading" :srcs="many">
                <div class="row_x2 f-row">
                    <div class="w-333" v-for="(v, i) in many" :key="i">
                        <card-outso-contract-actual :one="v"></card-outso-contract-actual>
                    </div>
                </div>
            </ui-page-empty>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterFull from '../../../funcks/ui_layout/filter/LayoutFilterFull.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import CpExpectOutsoBaseMsg from '../../../component/contract/expect/CpExpectOutsoBaseMsg.vue'
import CardOutsoContract from '../../../funcks/ui/card/contract/CardOutsoContract.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import CardOutsoContractActual from '../../../funcks/ui/card/contract/CardOutsoContractActual.vue'
export default {
    components: {
    LayoutScreen,
    LayoutFilterFull,
    PanelDef,
    CpExpectOutsoBaseMsg,
    CardOutsoContract,
    UiPageEmpty,
        CardOutsoContractActual
},
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 500)
        },
    },
    mounted() {
        this.fetching()
    },
    data() {
        return {
            loading: true, many: [
                { tit: '搭棚架', company: { name: 'Eric', charge: 'Eric', phone: '+888 999999' },
                    nego_date: '2022-12-12', nego_finished_date: '2022-12-12',
                    project_start: '2022-12-12', project_finish: '2022-12-12',
                    contract_totai: '121.2', contract_actual_totai: '223.3',
                    remark: '延時開始價格降低'
                }
            ]
        }
    }
}
</script>

<style>

</style>