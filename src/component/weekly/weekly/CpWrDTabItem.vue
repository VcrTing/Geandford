<template>
<div class="upper">
    <panel-def :head="'相關資料'">
        <div class="fx-l">
            <div class="w-37"><b>審核者名稱：</b>{{ item.surveyor }}</div>
            <div class="w-31"><b>審核日期：</b>
                <span>{{ item.survey_date }}</span>
            </div>
            <div class="w-32"><b>該項目完成狀況：</b>{{ item.done ? '已完成' : '未完成' }}</div>
        </div>
    </panel-def>

    <div class="upper_x2 pt">
        <panel-def :head="v.item_name" v-for="(v, i) in item.item_list" :key="i">
            <cp-wr-d-comm-items :one="v"></cp-wr-d-comm-items>
        </panel-def>
    </div>
</div>
</template>

<script>
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import CpWrDCommItems from './msg/CpWrDCommItems.vue'
export default {
    props: [ 'item' ],
    components: { PanelDef, CpWrDCommItems },
    mounted() {
        console.log( this.item )
    }
}
</script>

<style>

</style>