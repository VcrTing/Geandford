<template>
    <div class="card-work card-outso-contract">
        <h5 class="pb fx-s">
            <span>{{ one.contract_sub_type.name }}</span>
            <ui-table-opera @view="go('/admin/contract/actual_outso_contract/actual_outso_contract_detail?id=' + one.uid)" class="fs" :_mode="3"></ui-table-opera>
        </h5>
        <hr/>
            <div class="pt" v-if="one.contractor_contact">
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商名称 </p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商负责人 </p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_contact.name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商联络电话</p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_contact.phone }}</p>
                </div>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">洽談合約日期</p>
                <p :class="'w-' + _wide[1]">{{ one.discussion_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">完成洽談合約日期</p>
                <p :class="'w-' + _wide[1]">{{ one.discussion_completion_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">工程開始時間</p>
                <p :class="'w-' + _wide[1]">{{ one.starting_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">預計完成時間</p>
                <p :class="'w-' + _wide[1]">{{ one.finishing_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">合约总价</p>
                <p :class="'w-' + _wide[1]">{{ one.actual_cost ? one.actual_cost : 0 }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">实际外判价</p>
                <p :class="'w-' + _wide[1]">{{ one.actual_contract_price ? one.actual_contract_price : 0 }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <div class="w-44">备注</div>
                <div class="w-56">{{ one.remarks ? one.remarks : '(无备注)' }}</div>
            </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: {
        one: {
            type: Object,
        },
        _wide: {
            type: Array, default() { return [ 45, 55 ] }
        }
    }
}
</script>

<style lang="sass" scoped>
</style>