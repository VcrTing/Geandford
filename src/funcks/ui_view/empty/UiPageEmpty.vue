<template>
    <div v-if="!load">
        <div v-if="srcs && srcs.length > 0" class="upper_x2">
            <slot></slot>
        </div>
        <div v-else class="py_x2 fx-c">
            No Data
        </div>
    </div>
    <loading v-else class="upper"></loading>
</template>

<script>
import Loading from '../shimmer/Loading.vue'
export default {
  components: { Loading },
    props: {
        srcs: { type: Array, },
        load: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>

</style>