<template>
    <div class="td pl-ip_icon">
        <div class="w-88">{{ one.name }}</div>
        <div class="w-12 t-c">
            <a :href="conf.baseURL + one.url">
                <ui-table-opera :_mode="2"></ui-table-opera>
            </a>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ]
}
</script>

<style>

</style>