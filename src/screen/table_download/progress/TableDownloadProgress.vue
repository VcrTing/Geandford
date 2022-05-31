<template>
        <layout-cont>
            <nav slot="filter">
                <ui-search-def :pahd="'請輸入文件名'"></ui-search-def>
            </nav>
            <div slot="opera">
                <button class="btn-pri_thin">
                    <vf-table-download-typed-select class="btn-def"></vf-table-download-typed-select>
                </button>
                <span class="px_s"></span>
                <button @click="cFunck(1020)" class="btn-def btn-pri">添加進度報告</button>
            </div>
            <div slot="cont">
                <div class="table">
                    <tdpro-tr></tdpro-tr>
                    
                    <ui-page-empty :srcs="many">
                        <ui-table-td-collsp class="td-collsp" v-for="(v, i) in many" :key="i">
                            <span slot="tit">
                                {{ v.cate }}<span class="px_s">({{ v.children.length }})</span>
                            </span>
                            <nav slot="td">
                                <tdpro-td :one="o" v-for="(o, j) in v.children" :key="j"></tdpro-td>
                            </nav>
                            <button slot="sub" class="fx-l">
                                <i class="mdi mdi-plus"></i>
                                <span class="pl_n">上傳文件</span>
                            </button>
                        </ui-table-td-collsp>
                    </ui-page-empty>
                </div>

                <tdpro-modal></tdpro-modal>
            </div>
        </layout-cont>
</template>

<script>
import UiSearchDef from '../../../funcks/ui_element/search/UiSearchDef.vue'
import UiTableTdCollsp from '../../../funcks/ui_element/table/tdin/UiTableTdCollsp.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'

import TdproTr from './table/TdproTr.vue'
import TdproTd from './table/TdproTd.vue'
import TdproModal from './comm/TdproModal.vue'
import VfTableDownloadTypedSelect from '../../../funcks/ui_form/table/VfTableDownloadTypedSelect.vue'

export default {
  components: { UiSearchDef, UiTableTdCollsp, LayoutCont, UiPageEmpty, TdproTr, TdproTd, TdproModal, VfTableDownloadTypedSelect },
    mounted() {
    },
    data() { return {
        many: [
            {
                cate: '表格壹', children: [
                    { id: 1, file: 'defaul_20202121023_ACC.pdf', date: '2022-05-05', link: 'https://www.baidu.com/' },
                    { id: 2, file: 'defaul_20202121099_ACC.pdf', date: '2022-02-05', link: 'https://www.baidu.com/' },
                    { id: 3, file: 'defaul_20202121078_ABB.pdf', date: '2022-02-05', link: 'https://www.baidu.com/' },
                ]
            }
        ]
    } }
}
</script>

<style>

</style>