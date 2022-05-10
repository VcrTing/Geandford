<template>
    <div class="td pl-ip_icon">
        <div class="w-70">
            <a :href="one.link">
                {{ one.file }}
            </a>
        </div>
        <div class="w-20">
            {{ one.date }}
        </div>
        <div class="w-10">
            <ui-table-opera></ui-table-opera>
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