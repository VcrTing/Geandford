<template>
    <div class="td pl-ip_icon">
        <div class="w-20">{{ one.report_abstract }}</div>
        <div class="w-11">{{ one.inspector }}</div>
        <div class="w-13">{{ one.edit_date }}</div>
        <div class="w-15">{{ one.correction_item }}</div>
        <div class="w-11">{{ one.reporter }}</div>
        <div class="w-12">{{ one.reviewer }}</div>
        <div class="w-12">{{ one.date }}</div>
        <div class="w-6 t-c">
            <ui-table-opera 
                @view="go('/admin/monthly_report/safety_review/safety_review_detail?id=' + one.uid)"
                :_mode="3"></ui-table-opera>
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