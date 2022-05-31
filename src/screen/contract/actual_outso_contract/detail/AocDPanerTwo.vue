<template>
    <div>
        <panel-def :head="'工程内容'">
            <p class="sub">依照香港法律、法规、守则及结合香港家具装修的特点，雇主与承建商双方与平等、自、协商一致的基础上，就承建商承包雇主的家居装饰工程的有关事宜达成协议如下：</p>
            <h6 class="py">附件一(承建商报价单)</h6>
            <p class="td-iin" v-for="(v, i) in many_bjd" :key="i">
                <span>{{ v.name }}</span>
                <ui-table-opera :_mode="2"></ui-table-opera>
            </p>
            <h6 class="py">附件二(承建商包括材料)</h6>
            <p class="td-iin" v-for="(v, j) in many_cl" :key="j+'_cl'">
                <span>{{ v.name }}</span>
                <ui-table-opera :_mode="2"></ui-table-opera>
            </p>
            <h6 class="py">附件三(承建商提交的图纸)</h6>
            <p class="td-iin" v-for="(v, j) in many_tz" :key="j+'_tz'">
                <span>{{ v.name }}</span>
                <ui-table-opera :_mode="2"></ui-table-opera>
            </p>
            <p class="pt">
                <b>承建商名称：<span>Jenny 2</span></b>
            </p>
        </panel-def>
        <h4 class="py">工程范围</h4>
        <panel-def>
            <cp-aoc-d-ptwo-items></cp-aoc-d-ptwo-items>
        </panel-def>
    </div>
</template>

<script>
import CpAocDPtwoItems from '../../../../component/contract/actual_detail/CpAocDPtwoItems.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { PanelDef, UiTableOpera, CpAocDPtwoItems },
    data() {
        return {
            loading: true, 
            many_bjd: [ { name: '大棚架.pdf' } ],
            many_cl: [ { name: '大棚架.pdf' } ],
            many_tz: [ { name: '大棚架.pdf' } ],
        }
    }
}
</script>

<style>

</style>