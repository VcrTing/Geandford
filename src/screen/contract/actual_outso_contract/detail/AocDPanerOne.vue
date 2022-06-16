<template>
    <div>
            <panel-def :head="'基本信息'">
                <cp-aoc-d-base-msg :_ioad="ioad" :one="item"></cp-aoc-d-base-msg>
            </panel-def>
            <panel-def :head="'合約信息'">
                <cp-aoc-d-cont-msg v-if="!ioad" :one="item"></cp-aoc-d-cont-msg>
                <loading :size="0" v-else></loading>
            </panel-def>
            <panel-def :head="'合約協議列表'">
                <aoc-d-trems :_ioad="ioad" :one="item"></aoc-d-trems>
            </panel-def>

            <div class="table">
                <aoc-d-tr></aoc-d-tr>
                <ui-page-empty :is_page="false" :ioad_size="0" :load="ioad" :srcs="designer">
                    <!-- 雇主 -->
                    <ui-td-items-wrapper :tit="'雇主'" :index="null">
                        <aoc-d-td v-for="(v, i) in employer" :key="i" :one="v"></aoc-d-td>
                    </ui-td-items-wrapper>

                    <!-- 委托代理人 -->
                    <ui-td-items-wrapper :tit="'委托代理人'" :index="null">
                        <aoc-d-td v-for="(v, i) in e_representative" :key="i" :one="v"></aoc-d-td>
                    </ui-td-items-wrapper>
                    
                    <!-- 东主或代理人 -->
                    <ui-td-items-wrapper :tit="'东主或代理人'" :index="null">
                        <aoc-d-td v-for="(v, i) in c_representative" :key="i" :one="v"></aoc-d-td>
                    </ui-td-items-wrapper>

                    <!-- 设计师 -->
                    <ui-td-items-wrapper :tit="'设计师'" :index="null">
                        <aoc-d-td v-for="(v, i) in designer" :key="i" :one="v"></aoc-d-td>
                    </ui-td-items-wrapper>

                    <!-- 工程负责人 -->
                    <ui-td-items-wrapper :tit="'工程负责人'" :index="null">
                        <aoc-d-td v-for="(v, i) in person_in_charge" :key="i" :one="v"></aoc-d-td>
                    </ui-td-items-wrapper>

                </ui-page-empty>
            </div>
    </div>
</template>

<script>
import CpAocDBaseMsg from '../../../../component/contract/actual_detail/CpAocDBaseMsg.vue'
import CpAocDContMsg from '../../../../component/contract/actual_detail/CpAocDContMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTdItemsWrapper from '../../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import AocDTd from './table/AocDTd.vue'
import AocDTr from './table/AocDTr.vue'
import AocDTrems from './trems/AocDTrems.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    props: {
        ioad: { type: Boolean },
        item: { type: Object }
    },
    computed: {
        // 雇主
        employer() {
            return [ this.item.employer ]
        },
        // 东主代理人
        e_representative() {
            return [ this.item.employer_representative ]
        },
        // 东主代理人
        c_representative() {
            return this.item.contractor_representative
        },
        // 设计师 
        designer() {
            return this.item.contract_designer
        },
        // 工程负责人
        person_in_charge() {
            return this.item.contract_person_in_charge
        },
    },
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 500)
        },
    },
    mounted() { this.fetching() },
    data() {
        return {
            loading: true, many: [
                { 
                    tit: '雇主', children: [ { name_ch: '張安', name_en: 'ZHANG', phone: '+888 88888' } ]
                },
                { 
                    tit: '委托代理人', children: [ { name_ch: '張安', name_en: 'ZHANG', phone: '+888 88888' } ]
                },
                { 
                    tit: '東主或代理人', children: [ { name_ch: '張安', name_en: 'ZHANG', phone: '+888 88888' } ]
                },
                { 
                    tit: '本工程設計師', children: [ { name_ch: '張安', name_en: 'ZHANG', phone: '+888 88888' }, { name_ch: '張安 2', name_en: 'ZHANG 2', phone: '+888 88888' } ]
                },
                { 
                    tit: '本工程負責人', children: [ { name_ch: '張安', name_en: 'ZHANG', phone: '+888 88888' } ]
                },
            ]
        }
    },
    components: {
        PanelDef,
        CpAocDBaseMsg,
        CpAocDContMsg,
        AocDTr,
        UiPageEmpty,
        UiTdItemsWrapper,
        AocDTd,
        AocDTrems,
        Loading
    },
}
</script>

<style>

</style>