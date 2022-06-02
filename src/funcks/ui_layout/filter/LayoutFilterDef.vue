<template>
    <div class="fiiter-bar">
        <div class="fx-1">
            <div v-if="!_timed" class="fb-many">
                <ui-search-def @search="toSearch" :pahd="_pahd" class="input-7 ip-w-100"></ui-search-def>
            </div>
            <div v-else class="fb-many">
                <div class="w-65">
                    <ui-search-def @search="toSearch" :pahd="_pahd" class="ip-w-100"></ui-search-def>
                </div>
                <div class="w-35">
                    <time-one class="ip-w-100" :def="'2022-12-12'"></time-one>
                </div>
            </div>
        </div>

        <div class="fb-opera">
            <button class="btn-pri_thin">
                <slot>
                    <vf-def-select class="btn-def" @sign="(v) => $emit('select', v)"></vf-def-select>
                </slot>
            </button>
            <span class="px_s"></span>
            <button class="btn-pri wh-btn">
                查詢
            </button>
        </div>
    </div>
</template>

<script>
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
import VfTableDownloadTypedSelect from '../../ui_form/table/VfTableDownloadTypedSelect.vue'
import UiSearchDef from '../../ui_element/search/UiSearchDef.vue'
import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
export default {
  components: { VfTableDownloadTypedSelect, VfDefSelect, UiSearchDef, TimeOne },
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