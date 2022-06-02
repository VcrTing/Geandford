<template>
    <div>
        <div class="pb">
            <h4 class="pb">風險評估清單</h4>
            <div class="td-iin">
                <div class="w-90">
                    {{ one.list_name }}
                </div>
                <div class="w-10 t-r">
                    <ui-table-opera :_mode="2"></ui-table-opera>
                </div>
            </div>
        </div>

        <div class="py" v-for="(v, i) in one.signas" :key="i">
            <h4 class="pb">負責人簽字</h4>
            <div class="td-iin">
                <div class="w-90">
                    {{ v.name }}
                </div>
                <div class="w-10 t-r">
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