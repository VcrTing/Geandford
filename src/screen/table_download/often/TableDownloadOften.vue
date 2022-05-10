<template>
        <layout-cont>
            <nav slot="filter">
                <ui-search @sign="(v) => search = v" :pahd="'請輸入文件名'"></ui-search>
            </nav>
            <div slot="opera">
                <button class="btn-pri_thin">
                    <vf-table-download-typed-select @sign="(v) => area = v" class="btn-def"></vf-table-download-typed-select>
                </button>
                <span class="px_s"></span>
                <button @click="cFunck(1010)" class="btn-def btn-pri">添加常用表格</button>
            </div>
            <div slot="cont">
                <div class="table">
                    <tdo-tr></tdo-tr>

                    <ui-page-empty :load="loading" :srcs="many">
                        <ui-table-td-collsp class="td-collsp" v-for="(v, i) in many" :key="i">
                            <span slot="tit">
                                {{ v.cate }}<span class="px_s">({{ v.children.length }})</span>
                            </span>
                            <nav slot="td">
                                <tdo-td :one="o" v-for="(o, j) in v.children" :key="j"></tdo-td>
                            </nav>
                            <button slot="sub" class="fx-l">
                                <i class="mdi mdi-plus"></i>
                                <span class="pl_n">上傳文件</span>
                            </button>
                        </ui-table-td-collsp>
                    </ui-page-empty>
                </div>

                <tdo-modal></tdo-modal>
            </div>
        </layout-cont>
</template>

<script>
import UiSearch from '../../../funcks/ui_element/search/UiSearch.vue'
import UiTableTdCollsp from '../../../funcks/ui_element/table/tdin/UiTableTdCollsp.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import TdoTd from './table/TdoTd.vue'
import TdoTr from './table/TdoTr.vue'

import TdoModal from './comm/TdoModal.vue'
import VfTableDownloadTypedSelect from '../../../funcks/ui_form/table/VfTableDownloadTypedSelect.vue'

export default {
  components: { UiSearch, UiTableTdCollsp, LayoutCont, TdoTr, TdoTd, TdoModal, UiPageEmpty, VfTableDownloadTypedSelect },
    mounted() {
        this.fetching()
    },
    watch: {
        area(n, o) { this.funnl() },
        search(n, o) { this.funnl() }
    },
    methods: {
        funnl() {
            let res = this.view.usedobj({
                area: this.area,
                name: this.search
            })
            console.log('過濾的條件 =', res)
        },
        async fetching() {
            setTimeout(e => this.loading = false, 600)
        }
    },
    data() { return {
        area: '',
        search: '',
        loading: true,
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