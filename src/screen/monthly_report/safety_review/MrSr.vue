<template>
    <layout-screen>
        <layout-filter-time slot="bar"></layout-filter-time>

        <div slot="cont" class="w-100">
            <div class="table-iine">
                <mr-sr-tr></mr-sr-tr>

                <ui-page-empty :load="loading" :srcs="many" :cls="''">
                    <mr-sr-td v-for="(v, i) in many" :key="i" :one="v"></mr-sr-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterDef from '../../../funcks/ui_layout/filter/LayoutFilterDef.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrSrTd from './table/MrSrTd.vue'
import MrSrTr from './table/MrSrTr.vue'
import LayoutFilterTime from '../../../funcks/ui_layout/filter/LayoutFilterTime.vue'
export default {
  components: { LayoutScreen, MrSrTr, UiPageEmpty, MrSrTd, LayoutFilterDef, LayoutFilterTime },
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
                    company_name: '富貴公司', project_name: '安全問題項目',
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