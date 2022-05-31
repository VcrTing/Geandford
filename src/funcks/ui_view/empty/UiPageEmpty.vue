<template>
    <nav>

        <div v-if="!load">
            <div v-if="srcs && srcs.length > 0" class="upper_x2">
                <div class="td-wrapper" :class="cls">
                    <slot></slot>
                </div>

                <div v-if="is_page" class="pt_x3">
                    <pagenation :_big="false" :count="total" @change="$emit('change')"></pagenation>
                </div>
            </div>
            <div v-else class="py_x2 fx-c">
                No Data
            </div>
        </div>
        <loading v-else class="upper"></loading>
    </nav>
</template>

<script>
import Pagenation from '../../ui/pagenation/Pagenation.vue'
import Loading from '../shimmer/Loading.vue'
export default {
  components: { Loading, Pagenation },
    props: {
        srcs: { type: Array, },
        load: {
            type: Boolean,
            default: true
        },
        total: {
            type: Number,
            default: 50
        },
        is_page: {
            type: Boolean,
            default: true
        },
        cls: {
            type: String,
        }
    }
}
</script>

<style>

</style>