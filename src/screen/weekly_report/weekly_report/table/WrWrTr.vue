<template>
    <div class="tr pl-ip_icon">
        <div class="w-22">項目名稱</div>
        <div class="w-30">參考編號</div>
        <div class="w-18">公司名稱</div>
        <div class="w-14">分判代表/負責人</div>
        <div class="w-10">
            時間
            <sort-def :res="srcs" :mode="'DATE'" @result="(v) => $emit('sort', v)" ref="sorTime"></sort-def>
        </div>
        <div class="w-6 t-c"></div>
    </div>
</template>

<script>
import SortDef from '../../../../funcks/ui_form/sort/SortDef.vue';
export default {
    props: [ 'srcs' ],
    components: { SortDef },
    methods: {
        
    }
}
</script>

<style>

</style>