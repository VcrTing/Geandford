<template>
    <layout-screen>
        <layout-filter-period slot="bar"></layout-filter-period>

        <nav slot="cont" class="w-100 ">
            <div class="table">
                <dr-rr-tr></dr-rr-tr>

                <ui-page-empty @change="pagenation" :load="loading" :srcs="many">
                    <ui-td-items-wrapper v-for="(m, j) in many" :key="j"
                        :index="j" :tit="'报告'" :plus="'添加物品'">
                        <dr-rr-td v-for="(v, i) in m.children" :key="i" :one="v"></dr-rr-td>
                    </ui-td-items-wrapper>
                </ui-page-empty>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrRrTd from './table/DrRrTd.vue'
import DrRrTr from './table/DrRrTr.vue'
import LayoutFilterPeriod from '../../../funcks/ui_layout/filter/LayoutFilterPeriod.vue'
export default {
  components: { LayoutScreen, DrRrTr, UiPageEmpty, UiTdItemsWrapper, DrRrTd, LayoutFilterPeriod },
    methods: {
        pagenation(n, ong, limit) {

        },
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 2400)
        },
    },
    data() {
        return {
            loading: true, many: [ { children: [ {
                name: '客房地板施工', uid: 'manfulls-001;tst-002;00001', date: '2022-12-12 12:12', status: false
            }]} ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>