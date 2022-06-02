<template>
    <layout-screen>
        <layout-filter-time slot="bar"></layout-filter-time>

        <div slot="cont" class="w-100">
            <div class="table-iine">
              <mr-st-tr></mr-st-tr>

              <ui-page-empty :load="loading" :srcs="many">
                  <mr-st-td v-for="(v, i) in many" :key="i" :one="v"></mr-st-td>
              </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrStTd from './table/MrStTd.vue'
import MrStTr from './table/MrStTr.vue'
import LayoutFilterTime from '../../../funcks/ui_layout/filter/LayoutFilterTime.vue'
export default {
  components: { LayoutScreen, MrStTr, UiPageEmpty, MrStTd, LayoutFilterTime },
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
                    company_name: '劉總', project_name: '安全問題項目',
                    uid: 'manfulls-001;tst-002;00001', 
                    date: '2022-12-12 12:12', status: false
                } ,
                { 
                    company_name: '劉總 2', project_name: '安全問題項目',
                    uid: 'manfulls-001;tst-002;00001', 
                    date: '2022-12-12 12:12', status: false
                } ,
                { 
                    company_name: '劉總 3', project_name: '安全問題項目',
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