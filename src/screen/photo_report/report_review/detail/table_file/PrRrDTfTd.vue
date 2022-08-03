<template>
    <div class="td">
        <div class="w-88">
            {{ one.name }}
        </div>
        <div class="w-12">
            <ui-table-opera :_ink="one.url" :_mode="2"></ui-table-opera>
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