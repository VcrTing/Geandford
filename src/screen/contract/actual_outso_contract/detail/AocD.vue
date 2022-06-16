<template>
    <layout-screen-form :back="false">
        <div class="w-100" slot="cont">
            <div class="fx-s pb_x2">
                <div class="w-22"></div>
                <div class="w-46">
                    <ui-contract-step-tab ref="tabREF" :def="tab" @tab="(v) => tab = v"></ui-contract-step-tab>
                </div>
                <div class="w-22 t-r">
                    <button @click="go('/admin/contract/actual_outso_contract')" class="btn-pri_thin px_x2 py_s">返回</button>
                    <span class="px_s"></span>
                    <button @click="change" class="btn-pri px_x2 py_s">
                        {{ tab == 1 ? '下一頁' : '上一頁' }}
                    </button>
                </div>
            </div>
            <aoc-d-paner-one :ioad="loading" :item="detai" v-if="tab == 1"></aoc-d-paner-one>
            <aoc-d-paner-two :ioad="loading" :item="detai" v-else-if="tab == 2"></aoc-d-paner-two>
            
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiContractStepTab from '../../../../funcks/ui_view/tab/UiContractStepTab.vue'
import AocDPanerOne from './AocDPanerOne.vue'
import AocDPanerTwo from './AocDPanerTwo.vue'

export default {
    components: {
        LayoutScreenForm,
        UiContractStepTab,
        AocDPanerOne,
        AocDPanerTwo,
    },
    computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },
    },
    mounted() {
        this.fetching()
    },
    methods: {
        change() { 
            this.tab = (this.tab == 1 ? 2 : 1)
            this.$refs.tabREF.change(this.tab)
        },

        async fetching() {
            this.loading = true
            let res = await this.serv.contract.contract(this, this.pro.uid + '/' + this.uid)

            console.log('RES =', res)

            this.detai = res
            setTimeout(e => this.loading = false, 300)
        },
    },
    data() {
        return {
            tab: 1,
            loading: true, detai: { }
        }
    }
}
</script>

<style>

</style>