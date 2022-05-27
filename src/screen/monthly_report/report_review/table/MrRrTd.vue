<template>
    <div class="td">
        <div class="w-22">
            {{ one.name_cbs }}
        </div>
        <div class="w-36">
            {{ one.uid }}
        </div>
        <div class="w-18">
            {{ one.name }}
        </div>
        <div class="w-13">
            {{ one.month }}
        </div>
        <div class="w-11 t-c">
            <ui-table-opera :_mode="3" @view="go('/admin/monthly_report/report_review/mr_rr_detail/' + one.id)"></ui-table-opera>
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