<template>
    <div class="tr pl-ip_icon">
        <div class="w-30">編號</div>
        <div class="w-12">日期
            <sort-def :res="srcs" :mode="'DATE'" @result="(v) => $emit('sort', v)" ref="sorTime"></sort-def>
        </div>
        <div class="w-18">概述</div>
        <div class="w-10">天氣</div>
        <div class="w-12">提交日期</div>
        <div class="w-10">簽署者</div>
        <div class="w-8 t-c"></div>
    </div>
</template>

<script>
import SortDef from '../../../../funcks/ui_form/sort/SortDef.vue'
export default {
  components: { SortDef },
    props: [ 'srcs' ]
}
</script>

<style>

</style>