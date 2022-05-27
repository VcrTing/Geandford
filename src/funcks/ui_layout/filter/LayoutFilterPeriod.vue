<template>
    <div class="w-100 fx-s">
        <nav class="pr_x2">
            <ui-search-def class="f-search ip-w-100"></ui-search-def>
        </nav>
        <div class="pr_x2 fx-1">
            <time-doub class="f-time"></time-doub>
        </div>
        <button class="btn-pri wh-btn">查询</button>
    </div>
</template>

<script>
import UiSearchDef from '../../ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../ui_element/timed/doub/TimeDoub.vue'
import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
export default {
  components: { TimeOne, VfDefSelect, UiSearchDef, TimeDoub },

}
</script>

<style>

</style>