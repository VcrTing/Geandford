<template>
    <div class="td pl-ip_icon">
        <div class="w-22">
            {{ one.project.name }}
        </div>
        <div class="w-30">
            {{ one.uid }}
        </div>
        <div class="w-18">
            {{ one.company_name }}
        </div>
        <div class="w-14">
            {{ one.contractor_representative }}
        </div>
        <div class="w-10">
            <!--span>{{ view.ser_timed(one.date, 0, false) }}</span-->
            {{ one.date }}
        </div>
        <div class="w-6 t-c">
            <ui-table-opera @view="go('/admin/weekly_report/weekly_report_detail/?id=' + one.uid)"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: {
        one: {
            type: Object
        }
    },

}
</script>

<style>

</style>