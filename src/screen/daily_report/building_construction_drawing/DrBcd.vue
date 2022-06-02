<template>
    <layout-screen>

        <layout-filter-period slot="bar">
            
        </layout-filter-period>

        <ui-menu-second slot="left" :plus="'添加報告'" :items="[
            { txt: '報告壹', pk: 202001 },
            { txt: '報告二', pk: 202002 },
            { txt: '報告三', pk: 202003 },
        ]"
            :def="second" @change="(v) => second = v"
        ></ui-menu-second>

        <nav slot="cont" class="w-100 ">

            <div class="table">
                <dr-bcd-tr></dr-bcd-tr>

                <ui-page-empty @change="pagenation" :load="loading" :srcs="many">

                    <ui-td-items-wrapper v-for="(m, j) in many" :key="j"
                        :index="j" :tit="'物品'" :plus="'添加表格'" :status="0"
                    >
                        <dr-bcd-td v-for="(v, i) in m.children" :key="i" :one="v"></dr-bcd-td>
                    </ui-td-items-wrapper>

                </ui-page-empty>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import PanelMenuSecond from '../../../funcks/ui/panel/PanelMenuSecond.vue'
import UiMenuSecond from '../../../funcks/ui_element/menu/UiMenuSecond.vue'
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrBcdTd from './table/DrBcdTd.vue'
import DrBcdTr from './table/DrBcdTr.vue'
import LayoutFilterPeriod from '../../../funcks/ui_layout/filter/LayoutFilterPeriod.vue'

export default {
    components: { LayoutScreen, PanelMenuSecond, UiPageEmpty, DrBcdTr, DrBcdTd, UiMenuSecond, UiTdItemsWrapper, LayoutFilterPeriod },
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 2400)
        },

        sign(v) {

        },
        pagenation(n, st, limit) {

        }
    },
    data() {
        return {
            loading: true, many: [ { children: [ {
                name: '客房地板施工', uid: 'manfulls-001;tst-002;00001', date: '2022-12-12 12:12', status: false
            }]} ],
            second: 202001,
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>