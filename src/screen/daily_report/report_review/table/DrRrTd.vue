<template>
    <div class="td pl-ip_icon">
        <div class="w-38">
            {{ one.name }}
        </div>
        <div class="w-30">
            {{ one.uid }}
        </div>
        <div class="w-20">
            {{ one.date }}
        </div>
        <div class="w-12 t-c">
            <ui-table-opera 
                @view="go('/admin/daily_report/report_review/dr_rr_detail')"
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