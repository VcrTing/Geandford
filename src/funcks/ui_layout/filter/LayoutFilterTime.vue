<template>
    <div class="fiiter-bar">
        <div class="fb-many fx-1">
            <time-one class="ip-w-100 input-7" :def="'2022-12-12'"></time-one>
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