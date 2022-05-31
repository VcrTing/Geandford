<template>
    <div class="card-work card-outso-contract">
        <h5 class="pb_s fx-s">
            <span>{{ one.tit }}</span>
            <ui-table-opera @view="go('/admin/contract/actual_outso_contract/actual_outso_contract_detail')" class="fs" :_mode="3"></ui-table-opera>
        </h5>
        <hr/>
            <div class="pt_s">
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商名称 </p>
                    <p class="w-56">{{ one.company.name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商负责人 </p>
                    <p class="w-56">{{ one.company.charge }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商联络电话</p>
                    <p class="w-56">{{ one.company.phone }}</p>
                </div>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">洽谈合约日期</p>
                <p class="w-56">{{ one.nego_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">完成洽谈合约日期</p>
                <p class="w-56">{{ one.nego_finished_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">工程开始时间</p>
                <p class="w-56">{{ one.project_start }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">完成时间</p>
                <p class="w-56">{{ one.project_finish }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">合约总价</p>
                <p class="w-56">{{ one.contract_totai }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">实际外判价</p>
                <p class="w-56">{{ one.contract_actual_totai }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <div class="w-44">备注</div>
                <div class="w-56">{{ one.remark }}</div>
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

        }
    }
}
</script>

<style lang="sass" scoped>
</style>