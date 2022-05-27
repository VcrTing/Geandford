<template>
    <div class="td pl-ip_icon">
        <div class="w-24">{{ one.name }}</div>
        <div class="w-26">{{ one.uid }}</div>
        <div class="w-20">{{ one.date }}</div>
        <div class="w-12">
            <view-audit-status :audit="!one.status" :status="one.status"></view-audit-status>
        </div>
        <div class="w-18 t-c">
            <a class="pri" @click="go(rt + '/bcd_table_review')">表格预览</a>&nbsp;&nbsp;
            <a class="pri" @click="go(rt + '/bcd_audit_report')">审核报告</a>
        </div>
    </div>
</template>

<script>
import ViewAuditStatus from '../../../../component/view/td_status/ViewAuditStatus.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera, ViewAuditStatus },
    props: [ 'one' ],
    computed: {
        rt() { return this.$route.path }
    },
    mounted() {
        console.log('RT =', this.rt)
    }
}
</script>

<style>

</style>