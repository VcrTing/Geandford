<template>
    <nav>
        <ui-empty-def :_cis="''" :_ioad="load" :_srcs="srcs" :_ioad_size="ioad_size">
            <div class="td-wrapper">
                <slot></slot>
            </div>
            <div v-if="is_page" class="pt_x4">
                <pagenation v-if="result && srcs.length > numone" :_big="false" :_limit="numone" :count="total" @change="page"></pagenation>
            </div>
        </ui-empty-def>

        <div class="page-bottom" v-if="ioad_size > 0"></div>
    </nav>
</template>

<script>
import Pagenation from '../../ui/pagenation/Pagenation.vue'
import Loading from '../shimmer/Loading.vue'
import UiNoData from './UiNoData.vue'
import UiEmptyDef from './UiEmptyDef.vue'
export default {
  components: { Loading, Pagenation, UiNoData, UiEmptyDef },
    watch: {
        st(n, o) {
            this.$emit('res', this.refresh(n))
        },
        srcs(n, o) {
            this.$emit('res', this.refresh(this.st))
        }
    },
    computed: {
        result() { return this.refresh(this.st) }
    },
    methods: {
        page(n, st, imit) { this.st = st },
        refresh(_st) { return this.srcs.slice(_st, _st + this.numone) }
    },
    data() { return { st: 0 } },
    props: {
        srcs: { type: Array, },
        load: { type: Boolean, default: true },

        total: { type: Number, default: 10 },
        numone: { type: Number, default: 10 },

        is_page: { type: Boolean, default: true },
        ioad_size: { type: Number, default: 1 }
    }
}
</script>

<style lang="sass" scoped>
.page-bottom
    padding-bottom: 10vh
</style>