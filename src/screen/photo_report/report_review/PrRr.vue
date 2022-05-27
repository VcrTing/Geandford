<template>
    <layout-screen>
        <layout-filter-def :_timed="true" slot="bar"></layout-filter-def>

        <div class="w-100" slot="cont">
            <div class="table-iine">
                <pr-rr-tr></pr-rr-tr>
                <ui-page-empty :load="loading" :srcs="many">
                    <pr-rr-td v-for="(v, i) in many" :key="i" :one="v"></pr-rr-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterDef from '../../../funcks/ui_layout/filter/LayoutFilterDef.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import PrRrTr from './table/PrRrTr.vue'
import PrRrTd from './table/PrRrTd.vue'
import LayoutFilterFull from '../../../funcks/ui_layout/filter/LayoutFilterFull.vue'

export default {
  components: { LayoutScreen, PrRrTd, UiPageEmpty, LayoutFilterDef, PrRrTr, LayoutFilterFull },
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
                    project_name: '安全问题项目',
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