<template>
    <div class="td pl-ip_icon">
        <div class="w-14">{{ one.name }}</div>
        <div class="w-21">{{ one.uid }}</div>
        <div class="w-15">{{ one.date }}</div>
        <div class="w-19">{{ one.msg }}</div>
        <div class="w-13">{{ one.contact }}</div>
        <div class="w-9">{{ one.status }}</div>
        <div class="w-9 t-c">
            <ui-table-opera @view="go('/admin/daily_report/safety_problem/safety_problem_detail')" :_mode="3"></ui-table-opera>
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