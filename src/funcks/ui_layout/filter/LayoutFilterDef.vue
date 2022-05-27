<template>
    <div class="fx-s w-unf-p-r">
        <div v-if="!_timed" class="w-60">
            <ui-search :pahd="_pahd" @sign="search" class="ip-w-100"></ui-search>
        </div>
        <div v-else class="fx-l fx-wp w-65 w-unf-p-r ip-fr ip-tr">
            <div class="w-65 pr">
                <ui-search-def @search="toSearch" :pahd="_pahd" class="ip-w-100 bxs"></ui-search-def>
            </div>
            <div class="w-35">
                <time-one class="ip-w-100" :def="'2022-12-12'"></time-one>
            </div>
        </div>

        <div>
            <button class="btn-pri_thin">
                <slot>
                    <vf-def-select class="btn-def" @sign="(v) => $emit('select', v)"></vf-def-select>
                </slot>
            </button>
            <!--span class="px_s"></!--span>
            <button-- @click="cFunck(1010)" class="btn-def btn-pri fadeR">{{ _plus }}</button-->
        </div>
    </div>
</template>

<script>
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
import VfTableDownloadTypedSelect from '../../ui_form/table/VfTableDownloadTypedSelect.vue'
import UiSearchDef from '../../ui_element/search/UiSearchDef.vue'
import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
import UiSearch from '../../ui_element/search/UiSearch.vue'
export default {
  components: { VfTableDownloadTypedSelect, VfDefSelect, UiSearchDef, TimeOne, UiSearch },
    props: [ '_pahd', '_timed' ],
    methods: {
        toSearch(v) {
            console.log('搜索了 v =', v)
        }
    }
}
</script>

<style>

</style>