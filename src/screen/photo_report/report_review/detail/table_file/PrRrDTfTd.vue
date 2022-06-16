<template>
    <div class="td">
        <div class="w-88">
            {{ one.name }}
        </div>
        <div class="w-12">
            <a target="_blank" :href="conf.baseURL + one.url" :download="one.uid + '_' + one.url">
                <ui-table-opera :_mode="2"></ui-table-opera>
            </a>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
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