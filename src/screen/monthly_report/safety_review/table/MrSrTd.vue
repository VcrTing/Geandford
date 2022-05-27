<template>
    <div class="td pl-ip_icon">
        <div class="w-24">
            {{ one.company_name }}
        </div>
        <div class="w-26">
            {{ one.uid }}
        </div>
        <div class="w-20">
            {{ one.project_name }}
        </div>
        <div class="w-18">
            {{ one.date }}
        </div>
        <div class="w-12 t-c">
            <ui-table-opera 
                @view="go('/admin/monthly_report/safety_review/safety_review_detail')"
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