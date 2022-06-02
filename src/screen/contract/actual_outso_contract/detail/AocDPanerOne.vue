<template>
    <div>
            <panel-def :head="'基本信息'">
                <cp-aoc-d-base-msg></cp-aoc-d-base-msg>
            </panel-def>
            <panel-def :head="'合約信息'">
                <cp-aoc-d-cont-msg></cp-aoc-d-cont-msg>
            </panel-def>
            <panel-def :head="'合約協議列表'">
                <aoc-d-trems></aoc-d-trems>
                <div class="pb_s"></div>
            </panel-def>

            <div class="table">
                <aoc-d-tr></aoc-d-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="many">
                    <ui-td-items-wrapper v-for="(m, n) in many" :key="n" :tit="m.tit" :index="null">
                        <aoc-d-td v-for="(v, i) in m.children" :key="i" :one="v"></aoc-d-td>
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
export default {
    components: { 
        PanelDef,
        CpAocDBaseMsg,
        CpAocDContMsg,
        AocDTr,
        UiPageEmpty,
        UiTdItemsWrapper,
        AocDTd,
        AocDTrems
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
    }
}
</script>

<style>

</style>