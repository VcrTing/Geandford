<template>
    <div class="fiiter-bar">
        <div class="fb-many">
            <ui-search v-show="mode == 1" ref="searchREF" @search="searchF" :pahd="_pahd"></ui-search>
            <time-one v-show="mode == 2" class="ip-w-100 fx-1" @result="(v) => time_1 = v" :def="time_1"></time-one>
        </div>

        <div class="fb-opera">
            <button class="btn-pri_thin wh-btn" @click="reset">重置</button>
            <span class="px_s"></span>
            <button class="btn-pri wh-btn" @click="submit">
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

import TimeOne from '../../ui_element/timed/one/TimeOne.vue'
import UiSearch from '../../ui_element/search/UiSearch.vue'
import Loading from '../../ui_view/shimmer/Loading.vue'
export default {
  components: { VfDefSelect, TimeOne, Loading, UiSearch },
    props: {
        _pahd: { type: String, default: '請輸入名稱或編號進行搜索' },
        _timed_1: { type: Boolean, default: false },
        param_search: {
            type: Array, default() { return [ 'uid' ] }
        },
        param_time_1: {
            type: String, default: 'date_lte'
        },
        mode: {
            type: Number, default: 1
        }
    },
    mounted() { 
        this.reset()
        setTimeout(e => this.loading = false, 1500) },
    watch: {
        time_1(n, o) { this.submit(true) }
    },
    methods: {
        reset() {
            this.time_1 = this.view.now()
            this.$refs.searchREF.q = ''
            this.$emit('sign', {})
        },
        submit(strong = false) {
            let q = this.$refs.searchREF.q
            strong ? this.$emit('sign', this.buildF(q, this.time_1)) : null
            if (q) { this.$emit('sign', this.buildF(q, this.time_1)) }
        },

        buildF(_search, t_1) {
            let res = { }
            if (_search) {
                this.param_search.map((e, i) => { 
                    res[`_where[_or][${i}][${e}]`] = _search 
                })
            }
            t_1 ? res[this.param_time_1] = t_1 : null
            return res
        },

        searchF(v) {
            if (v) {
                this.submit()
            }
        }
    },
    data() {
        return {
            loading: true, time_1: ''
        }
    },
}
</script>

<style>

</style>