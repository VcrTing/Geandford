<template>
    <layout-screen>
        <layout-filter-period slot="bar"></layout-filter-period>

        <nav slot="cont" class="w-100 ">
            <div class="table-inn">
                <dr-sp-tr></dr-sp-tr>

                <ui-page-empty @change="pagenation" :load="loading" :srcs="many">
                        <dr-sp-td v-for="(v, i) in many" :key="i" :one="v"></dr-sp-td>
                </ui-page-empty>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import LayoutFilterPeriod from '../../../funcks/ui_layout/filter/LayoutFilterPeriod.vue'
import DrSpTr from './table/DrSpTr.vue'
import DrSpTd from './table/DrSpTd.vue'
export default {
  components: { LayoutScreen, UiPageEmpty, UiTdItemsWrapper, LayoutFilterPeriod, DrSpTr, DrSpTd },
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
            loading: true, many: [ 
                { 
                    name: '案例001', contact: '柳葉眉', msg: '這裏是個案',
                    uid: 'manfulls-001;tst-002;00001', 
                    date: '2022-12-12 12:12', status: false
                } 
            ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>