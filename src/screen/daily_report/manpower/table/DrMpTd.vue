<template>
    <div class="td pl-ip_icon">
        <div class="w-26">
            {{ one.work_type }}
        </div>
        <div class="w-24">
            {{ one.hour }}
        </div>
        <div class="w-22">
            {{ one.num }}
        </div>
        <div class="w-18">
            {{ one.date }}
        </div>
        <div class="w-10 t-c">
            <ui-table-opera :_mode="3" @view="go('/admin/daily_report/man_power/man_power_detail')"></ui-table-opera>
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