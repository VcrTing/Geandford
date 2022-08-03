<template>
    <div>
        <h5 class="pb">合約條款</h5>
        <div v-if="!_ioad">
            <div v-if="one && one.contract_terms && one.contract_terms.length > 0">
                <div class="td-iin pl-ip_icon" v-for="(v, i) in one.contract_terms" :key="i">
                    <div>
                        {{ v.name }}
                    </div>
                    <ui-table-opera :_ink="v.url" :_mode="2"></ui-table-opera>
                </div>
            </div>
            <ui-no-data v-else></ui-no-data>
        </div>
        <loading v-else :size="0"></loading>
    </div>
</template>

<script>
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import Loading from '../../../../../funcks/ui_view/shimmer/Loading.vue'
import UiNoData from '../../../../../funcks/ui_view/empty/UiNoData.vue'
export default {
  components: { UiTableOpera, Loading, UiNoData },
    props: {
        _ioad: {
            type: Boolean
        },
        one: {
            type: Object
        }
    },
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