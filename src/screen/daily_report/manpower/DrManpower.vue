<template>
    <layout-screen>
        <layout-filter-def :_pahd="'输入搜索内容'" :_timed="true" slot="bar"></layout-filter-def>
        <div slot="cont" class="w-100">
            <div class="table-iine">
                <dr-mp-tr></dr-mp-tr>
                <ui-page-empty :cls="''" :load="loading" :srcs="many">
                    <dr-mp-td v-for="(v, i) in many" :key="i" :one="v"></dr-mp-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterDef from '../../../funcks/ui_layout/filter/LayoutFilterDef.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrMpTd from './table/DrMpTd.vue'
import DrMpTr from './table/DrMpTr.vue'
export default {
  components: { LayoutScreen, LayoutFilterDef, DrMpTr, UiPageEmpty, DrMpTd },
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
                    id: 1, work_type: '油漆', hour: 40, num: 3, date: '2022-12-12'
                },
                {
                    id: 1, work_type: '油漆', hour: 40, num: 3, date: '2022-12-12'
                }
            ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>