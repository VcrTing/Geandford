<template>
        <layout-cont>
            <nav slot="filter">
                <ui-search-def :pahd="'請輸入姓名或郵箱地址'"></ui-search-def>
            </nav>
            <div slot="opera">
                <button class="btn-pri_thin">
                    <vf-member-type-select class="btn-def"></vf-member-type-select>
                </button>
                <span class="px_s"></span>
                <button @click="cFunck(1001)" class="btn-def btn-pri">添加聯絡人</button>
            </div>
            <div slot="cont">
                <div class="table">
                    <mc-tr></mc-tr>
                    <ui-table-td-collsp class="td-collsp">
                        <span slot="tit">表格</span>
                        <mc-td slot="td"></mc-td>
                        <button slot="sub" class="fx-l">
                            <i class="mdi mdi-plus"></i>
                            <span class="pl_n">添加表格</span>
                        </button>
                    </ui-table-td-collsp>
                </div>

                <member-coopera-modal></member-coopera-modal>
            </div>
        </layout-cont>
</template>

<script>
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiSearchDef from '../../../funcks/ui_element/search/UiSearchDef.vue'
import UiTableTdCollsp from '../../../funcks/ui_element/table/tdin/UiTableTdCollsp.vue'
import VfMemberTypeSelect from '../../../funcks/ui_form/member/VfMemberTypeSelect.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import Crumbs from '../../../funcks/ui_layout/menu/crumbs/Crumbs.vue'
import MemberCooperaModal from './comm/MemberCooperaModal.vue'
import McTd from './table/McTd.vue'
import McTr from './table/McTr.vue'
export default {
  components: { UiHeader, UiSearchDef, McTr, McTd, UiTableTdCollsp, Crumbs, LayoutCont, VfMemberTypeSelect, MemberCooperaModal },
    mounted() {
    },
    data() { return {
        many: [
            {
                cate: '管理員', children: [
                    
                ]
            }
        ]
    } }
}
</script>

<style>

</style>