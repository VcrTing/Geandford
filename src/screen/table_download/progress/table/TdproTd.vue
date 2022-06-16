<template>
    <div class="td pl-ip_icon">
        <div class="w-16">{{ one.title }}</div>
        <div class="w-30">{{ one.uid }}</div>
        <div class="w-22">{{ one.project.name }}</div>
        <div class="w-12">{{ one.date_start }}</div>
        <div class="w-12">{{ one.date_end }}</div>
        <div class="w-8 t-c">
            <ui-fiie-iink v-if="one.report" :iink="one.report.url"></ui-fiie-iink>
            <!--ui-table-opera @view="go('/admin/table_download/progress/progress_detail?id=' + one.uid)"></ui-table-opera-->
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import UiFiieIink from '../../../../funcks/ui_view/iink/UiFiieIink.vue'
export default {
  components: { UiTableOpera, UiFiieIink },
    props: [ 'one' ]
}
</script>

<style>

</style>