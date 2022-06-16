<template>
    <div class="td pl-ip_icon">
        <div class="w-26">
            {{ one.uid }}
        </div>
        <div class="w-19">
            {{ one.company_name }}
        </div>
        <div class="w-9">
            {{ one.accident.accident_this_month }}&nbsp;件
        </div>
        <div class="w-10">
            {{ one.accident.injured_this_month }}&nbsp;人
        </div>
        <div class="w-9">
            {{ one.damage.damage_this_month }}&nbsp;項
        </div>
        <div class="w-10">
            {{ one.hazardous_incident.hazardous_incident_this_month }}&nbsp;件
        </div>
        <div class="w-9">
            {{ one.date }}
        </div>
        <div class="w-8 t-c">
            <ui-table-opera :_mode="3" @view="go('/admin/monthly_report/report_review/mr_rr_detail?id=' + one.uid)"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ]
}
</script>

<style>

</style>