<template>
    <div>
        <h5 class="pb">合约条款</h5>
        <div class="td-iin pl-ip_icon" v-for="(v, i) in many" :key="i">
            <div>
                搭棚架.pdf 
            </div>
            <ui-table-opera :_mode="2"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    data() {
        return {
            loading: true,
            many: [
                {

                }
            ]
        }
    }
}
</script>

<style>

</style>