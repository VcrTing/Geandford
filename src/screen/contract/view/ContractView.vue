<template>
    <layout-cont>
        <layout-filter-def slot="bar"
            :_pahd="'請輸入合约名称'"
            :_plus="'添加合约'"
            >
                <vf-def-select @sign="(v) => {}" class="btn-def"></vf-def-select>
            </layout-filter-def>

        <div slot="cont">
            <div class="table">
                <ctv-tr></ctv-tr>

                <ui-page-empty @change="pagenation" :load="loading" :srcs="many">
                    <ctv-td v-for="(v, i) in many" :key="i" :one="v"></ctv-td>
                </ui-page-empty>
                
            </div>
        </div>
    </layout-cont>
</template>

<script>
import VfDefSelect from '../../../funcks/ui_form/def/VfDefSelect.vue'
import VfTableDownloadTypedSelect from '../../../funcks/ui_form/table/VfTableDownloadTypedSelect.vue'
import LayoutFilterDef from '../../../funcks/ui_layout/filter/LayoutFilterDef.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import CtvTd from './table/CtvTd.vue'
import CtvTr from './table/CtvTr.vue'
export default {
  components: { LayoutCont, LayoutFilterDef, VfTableDownloadTypedSelect, VfDefSelect,
    CtvTr,  CtvTd,  UiPageEmpty },
    methods: {
        async fetching() {
            this.loading = true

            setTimeout(e => this.loading = false, 200)
        },

        pagenation(pg, start, limit) {

        }
    },
    data() {
        return {
            loading: true, many: [ ]
        }
    },
    mounted() { this.fetching() }
}
</script>

<style>

</style>