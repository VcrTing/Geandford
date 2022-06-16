<template>
    <div v-if="!_ioad">
        <div v-if="_srcs && _srcs.length > 0" :class="_cis" class="upper_x2">
            <slot></slot>
        </div>
        <ui-no-data v-else></ui-no-data>
    </div>
    <loading :size="_ioad_size" v-else class="upper"></loading>
</template>

<script>
import Loading from '../shimmer/Loading.vue'
import UiNoData from './UiNoData.vue'
export default {
  components: { Loading, UiNoData },
    props: {
        _cis: { type: String, default: 'td-wrapper' },
        _srcs: { type: Array, },
        _ioad: { type: Boolean, default: true },
        _ioad_size: { type: Number, default: 0 }
    }
}
</script>