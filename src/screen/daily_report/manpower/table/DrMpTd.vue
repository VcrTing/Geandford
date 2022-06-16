<template>
    <div class="td pl-ip_icon">
        <div class="w-26">
            {{ one.worker_type }}
        </div>
        <div class="w-24">
            {{ one.work_hour }}
        </div>
        <div class="w-22">
            {{ one.worker_number }}
        </div>
        <div class="w-18">
            {{ one.date }}
        </div>
        <div class="w-10 t-c">
            <ui-table-opera :_mode="3" @view="went"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: { UiTableOpera },
    props: [ 'one' ],
    methods: {
        went() {
            this.view.set_ss('jianyi_worker', this.one)
            this.go('/admin/daily_report/man_power/man_power_detail?id=' + this.one.uid)
        }
    }
}
</script>

<style>

</style>