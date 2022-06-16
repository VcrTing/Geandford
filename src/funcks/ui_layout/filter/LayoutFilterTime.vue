<template>
    <div class="fiiter-bar">
        <div class="fb-many fx-1">
            <time-one class="ip-w-100 input-7" :def="'2022-12-12'"></time-one>
        </div>

        <div class="fb-opera">
            <button class="btn-pri_thin wh-btn">
                重置
                <!--slot>
                    <vf-def-select class="btn-def" @sign="(v) => $emit('select', v)"></vf-def-select>
                </slot-->
            </button>
            <span class="px_s"></span>
            <button class="btn-pri wh-btn">
                <span v-if="!loading">
                    查詢
                </span>
                <loading :_class="'loading-fff'" v-else :size="-1"></loading>
            </button>
        </div>
    </div>
</template>

<script>
import VfDefSelect from '../../ui_form/def/VfDefSelect.vue'
import VfTableDownloadTypedSelect from '../../ui_form/table/VfTableDownloadTypedSelect.vue'
import UiSearchDef from '../../ui_element/search/UiSearchDef.vue'
import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
import Loading from '../../ui_view/shimmer/Loading.vue'
export default {
  components: { VfTableDownloadTypedSelect, VfDefSelect, UiSearchDef, TimeOne, Loading },
    props: [ '_pahd', '_timed' ],
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        setTimeout(e => this.loading = false, 1500)
    },
    methods: {
        toSearch(v) {
            console.log('搜索了 v =', v)
        }
    }
}
</script>

<style>

</style>