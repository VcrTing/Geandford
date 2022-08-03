<template>
    <div class="td-iin td-photo">
        <div class="w-6">
            <div class="img" :style="{
                'background-image': 'url(' + conf.baseURL + one.image.url + ')',
                'background-size': 'cover'
            }">

            </div>
        </div>
        <div class="w-4"></div>
        <div class="w-31">
            {{ one.image.name }}
        </div>
        <div class="w-28">
            {{ one.description }}
        </div>
        <div class="w-20">
            {{ view.ser_timed(one.image.updated_at, false, true) }}
        </div>
        <div class="w-11 t-r">
            <ui-table-opera :_ink="one.image.url" :_mode="2"></ui-table-opera>
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