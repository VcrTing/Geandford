<template>
    <div class="td pl-ip_icon">
        <div class="w-14">{{ one.case_description }}</div>
        <div class="w-21">{{ one.case_id }}</div>
        <div class="w-15">{{ one.case_date }}</div>
        <div class="w-19">{{ one.remark }}</div>
        <div class="w-13">{{ one.issue_by }}</div>
        <div class="w-9">{{ one.case_closed ? '已結束' : '' }}</div>
        <div class="w-9 t-c">
            <ui-table-opera @view="go('/admin/daily_report/safety_problem/safety_problem_detail/?id=' + one.uid)" :_mode="3"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: {
        one: {
            type: Object,
        }
    }
}
</script>

<style>

</style>