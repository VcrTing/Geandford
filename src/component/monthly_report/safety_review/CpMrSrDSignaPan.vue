<template>
    <div>
        <div class="py">
            <h4 class="pb">风险评估清单</h4>
            <div class="pl_x3 panel-sim fx-s py">
                <div class="w-70">
                    {{ one.list_name }}
                </div>
                <div class="w-30 t-r">
                    <ui-table-opera :_mode="2"></ui-table-opera>
                </div>
            </div>
        </div>

        <div class="py" v-for="(v, i) in one.signas" :key="i">
            <h4 class="pb">负责人签字</h4>
            <div class="pl_x3 panel-sim fx-s py">
                <div class="w-70">
                    {{ v.name }}
                </div>
                <div class="w-30 t-r">
                    <ui-table-opera :_mode="2"></ui-table-opera>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import UiTableOpera from '../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: {
        one: {
            type: Object,
            default() {
                return {
                    list_name: '2022-12-12 manfulls go.pdf',
                    signas: [
                        { name: '1001 ERIC 2022-12-12.pdf' },
                        { name: '1001 ERIC 2022-12-12.pdf' }
                    ]
                }
            }
        }
    }
}
</script>

<style>

</style>