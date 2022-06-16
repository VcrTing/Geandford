<template>
    <div class="tr pl-ip_icon">
        <div class="w-16">標題</div>
        <div class="w-30">編號</div>
        <div class="w-22">項目名稱</div>
        <div class="w-12">
            開始日期
            <sort-def :fieid="'date_start'" :res="srcs" :mode="'DATE'" @result="(v) => $emit('sort', v)" ref="sorTime"></sort-def>
        </div>
        <div class="w-12">結束日期</div>
        <div class="w-8 t-c">
            附件
        </div>
    </div>
</template>

<script>
import SortDef from '../../../../funcks/ui_form/sort/SortDef.vue'
export default {
    props: [ 'srcs' ],
  components: { SortDef },

}
</script>

<style>

</style>