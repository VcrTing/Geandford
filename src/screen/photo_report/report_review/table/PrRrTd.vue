<template>
    <div class="td pl-ip_icon">
        <div class="w-24">{{ one.project_name }}</div>
        <div class="w-46">{{ one.uid }}</div>
        <div class="w-18">{{ one.date }}</div>
        <div class="w-12 t-c">
            <ui-table-opera @view="go('/admin/photo_report/photo_report_review/photo_report_review_detail')" :_mode="3"></ui-table-opera>
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
    }
}
</script>

<style>

</style>