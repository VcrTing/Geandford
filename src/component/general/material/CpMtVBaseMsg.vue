<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <div class="w-37">
                <b>總價格：</b>
                <span>$&nbsp;{{ one.totalCost }}</span>
            </div>
            <div class="w-63">
                <b>損壞總價格：</b>
                <span>$&nbsp;{{ one.totalDamagedCost }}</span>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <div class="w-37">
                <b>總價格：</b>
                <span>...</span>
            </div>
            <div class="w-63">
                <b>損壞總價格：</b>
                <span>...</span>
            </div>
        </div>
    </div>

</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: [ 'ioad', 'one' ],
    computed: {
        totai() {
            return 0
        },
        damaged() {
            return 0
        }
    }
}
</script>

<style>

</style>