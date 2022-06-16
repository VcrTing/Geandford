<template>
    <div class="td pl-ip_icon">
        <div class="w-19">
            {{ one.project.name }}
        </div>
        <div class="w-27">
            {{ one.uid }}
        </div>
        <div class="w-18">
            {{ one.course_title }}
        </div>
        <div class="w-10">
            {{ one.current_topic.length }}
        </div>
        <div class="w-11">
            {{ one.edit_date }}
        </div>
        <div class="w-12">
            {{ one.date }}
        </div>
        <div class="w-8 t-c">
            <ui-table-opera @view="go('/admin/monthly_report/safety_training/safety_training_detail?id=' + one.uid)" :_mode="3"></ui-table-opera>
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