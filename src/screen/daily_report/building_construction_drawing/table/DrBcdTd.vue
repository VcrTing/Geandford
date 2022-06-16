<template>
    <div class="td pl-ip_icon">
        <div class="w-18">{{ one.title }}</div>
        <div class="w-32">{{ one.uid }}</div>
        <div class="w-16">{{ one.submission_date }}</div>
        <div class="w-15">
            <view-audit-status :audit="one.status" :status="one.status"></view-audit-status>
        </div>
        <div class="w-19 t-c">
            <a class="pri" @click="go(rt + '/bcd_table_review?id=' + one.uid)">表格預覽</a>&nbsp;&nbsp;
            <a class="pri" @click="go(rt + '/bcd_audit_report?id=' + one.uid )">審核報告</a>
        </div>
    </div>
</template>

<script>
import ViewAuditStatus from '../../../../component/view/td_status/ViewAuditStatus.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera, ViewAuditStatus },
    props: [ 'one', 'outter' ],
    computed: {
        rt() { return this.$route.path }
    },
    mounted() {
        console.log('Inner one =', this.one)
    }
}
</script>

<style>

</style>