<template>
    <div class="td pl-ip_icon">
        <div class="w-22">{{ one.uid }}</div>
        <div class="w-37 t-elip_x2">{{ one.location.address }}</div>
        <div class="w-21">{{ one.situation }}</div>
        <div class="w-12">{{ one.date }}</div>
        <div class="w-8 t-c">
            <ui-table-opera @view="go('/admin/photo_report/photo_report_review/photo_report_review_detail?id=' + one.uid)" :_mode="3"></ui-table-opera>
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