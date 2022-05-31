<template>
    <div class="td-iin td-photo">
        <div class="w-6">
            <div class="img" :style="{
                'background-image': 'url(' + one.img + ')',
                'background-size': 'cover'
            }">

            </div>
        </div>
        <div class="w-4"></div>
        <div class="w-30">
            {{ one.name }}
        </div>
        <div class="w-36">
            {{ one.remark }}
        </div>
        <div class="w-13">
            {{ one.date }}
        </div>
        <div class="w-11 t-r">
            <ui-table-opera @view="go('')" :_mode="2"></ui-table-opera>
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