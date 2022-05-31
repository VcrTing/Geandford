<template>
    <div class="fiiter-bar">
        <div class="fb-many">
            <ui-search-def class="f-search ip-w-100"></ui-search-def>
            <div class="fx-1">
                <time-doub class="fx-1 f-time w-100"></time-doub>
            </div>
        </div>
        <div class="fb-opera">
            <button class="btn-pri wh-btn">查询</button>
        </div>
    </div>
</template>

<script>
import UiSearchDef from '../../ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../ui_element/timed/doub/TimeDoub.vue'
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
export default {
  components: { VfDefSelect, UiSearchDef, TimeDoub },

}
</script>

<style>

</style>