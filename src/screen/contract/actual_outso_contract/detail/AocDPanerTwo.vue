<template>
    <div>
        <panel-def :head="'工程內容'">
            <p class="sub">依照香港法律、法規、守則及結合香港家具裝修的特點，雇主與承建商雙方與平等、自、協商壹致的基礎上，就承建商承包雇主的家居裝飾工程的有關事宜達成協議如下：</p>
            
            <div>
                <h6 class="py">附件一(承建商報價單)</h6>
                <ui-td-downioad :_ioad="ioad" :srcs="item.attachment_1"></ui-td-downioad>

                <h6 class="py">附件二(承建商包括材料)</h6>
                <ui-td-downioad :_ioad="ioad" :srcs="item.attachment_2"></ui-td-downioad>

                <h6 class="py">附件三(承建商提交的圖紙)</h6>
                <ui-td-downioad :_ioad="ioad" :srcs="item.attachment_3"></ui-td-downioad>

            </div>
            <div class="pt_x2 fx-l">
                <div class="w-37">
                    <b>承建商名稱：</b><span>{{ item.contractor_name }}</span>
                </div>
                <div class="w-67">
                    <b>合約批準人姓名：</b><span>{{ item.contract_approved_by }}</span>
                </div>
            </div>
        </panel-def>
        <h4 class="py">簽名</h4>
        <ui-td-downioad :_cis="'bxs px_x2 bg-FFF'" :_ioad="ioad" :_mime="true" :srcs="[ item.signature ]"></ui-td-downioad>

        <h4 class="py">工程範圍</h4>

        <ui-empty-def :_ioad="ioad" :_srcs="item.assigned_area">
            <panel-def v-for="(v, i) in item.assigned_area" :key="'aa_' + i">
                <cp-aoc-d-ptwo-items :one="v"></cp-aoc-d-ptwo-items>
            </panel-def>
        </ui-empty-def>
    </div>
</template>

<script>
import CpAocDPtwoItems from '../../../../component/contract/actual_detail/CpAocDPtwoItems.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
import UiTdDownioad from '../../../../funcks/ui_element/table/td_downioad/UiTdDownioad.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import UiEmptyDef from '../../../../funcks/ui_view/empty/UiEmptyDef.vue'
export default {
  components: { PanelDef, UiTableOpera, CpAocDPtwoItems, Loading, UiTdDownioad, UiPageEmpty, UiEmptyDef },
    props: {
        item: { type: Object },
        ioad: { type: Boolean }
    }
}
</script>

<style>

</style>