<template>
    <nav class="tb-opera" v-if="!_mode">
        <!-- 絕對單獨的 詳情 字眼 -->
        <button class="btn-td_opera" @click="view">
            <span>詳情</span>
        </button>
    </nav>
    <ui-fiie-iink v-else-if="_mode == 2" :iink="_ink">

    </ui-fiie-iink>
    <nav class="tb-opera" v-else>
        <!-- 絕對單獨的 詳情 字眼 -->
        <button class="btn-td_opera" @click="view">
            <span>詳情</span>
        </button>
    </nav>
</template>
<script>
import UiFiieIink from '../../../ui_view/iink/UiFiieIink.vue'
export default {
  components: { UiFiieIink },
    props: [ '_item', '_mode', '_ink' ],
    mounted() {
        console.log('_ink =', this._ink)
    },
    methods: {
        view() {
            this.$emit('view')
        },
        edit() {
            this.$emit('edit')
        },
        trash() {
            this.$emit('trash')
        }
    }
}
</script>