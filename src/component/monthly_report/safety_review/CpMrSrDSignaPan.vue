<template>
    <div>
        <div class="table-iine">
            <h4 class="pb">風險評估清單</h4>
            <div class="td" v-for="(v, i) in one.risk_assessment_list" :key="i">
                <div class="w-90">
                    {{ v.name }}
                </div>
                <div class="w-10 t-r">
                    <a :href="conf.baseURL + v.url">
                        <ui-table-opera :_mode="2"></ui-table-opera>
                    </a>
                </div>
            </div>
        </div>

        <div class="py">
            <h4 class="pb_x">負責人簽字</h4>
            <div class="row_x2 f-row">
                <div class="px_s" v-for="(v, i) in signas" :key="i">
                    <card-sign :one="v"></card-sign>
                </div>
            </div>
            <!--div class="td-iin">
                <div class="w-90">
                    {{ v.name }}&nbsp;({{ v.mime }})&nbsp;({{ view.ser_timed(v.updated_at) }})
                </div>
                <div class="w-10 t-r">
                    <a :href="conf.baseURL + v.url">
                        <ui-table-opera :_mode="2"></ui-table-opera>
                    </a>
                </div>
            </!--div-->
        </div>

    </div>
</template>

<script>
import UiTableOpera from '../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import CardSign from '../../../funcks/ui_layout/card/sign/CardSign.vue'
export default {
  components: { UiTableOpera, CardSign },
    computed: {
        signas() {
            return [
                this.one.signature_1,
                this.one.signature_2
            ]
        }
    },
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

<style lang="sass">
.f-row
    align-items: start
    justify-content: start
</style>