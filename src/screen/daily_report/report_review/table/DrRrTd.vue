<template>
    <div class="td pl-ip_icon">
        <div class="w-30">{{ one.uid }}</div>
        <div class="w-12">{{ one.create_date }}</div>
        <div class="w-18">{{ one.description }}</div>
        <div class="w-10">{{ one.weather }}</div>
        <div class="w-12">{{ one.release_date }}</div>
        <div class="w-10">{{ one.signed_by }}</div>
        <div class="w-8 t-c">
            <ui-table-opera 
                @view="go('/admin/daily_report/report_review/dr_rr_detail?id=' + one.uid)"
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