<template>
    <div class="td pl-ip_icon">
        <div class="w-34">{{ one.uid }}</div>
        <div class="w-21">{{ one.name }}</div>
        <div class="w-13">{{ one.files.length }}</div>
        <div class="w-12">{{ view.ser_timed(one.created_at) }}</div>
        <div class="w-12">{{ view.ser_timed(one.updated_at) }}</div>
        <div class="w-8">
            <ui-table-opera @view="go('/admin/table_download/often/often_detail?id=' + one.uid)"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '@/funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ]
}
</script>

<style>

</style>