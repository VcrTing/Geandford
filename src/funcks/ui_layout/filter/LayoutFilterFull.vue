<template>
    <div class="w-100 fx-s">
        <div class="pr_x2 fx-1">
            <time-one class="ip-fr ip-w-100"></time-one>
        </div>
        <vf-def-select class="btn-pri_thin wh-btn"></vf-def-select>
        <span class="px_s"></span>
        <button class="wh-btn btn-pri">查詢</button>
    </div>
</template>

<script>
import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
export default {
  components: { TimeOne, VfDefSelect },

}
</script>

<style>

</style>