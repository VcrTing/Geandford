<template>
    <nav class="tb-opera" v-if="!_mode">
        <!-- 絕對單獨的 詳情 字眼 -->
        <button class="btn-td_opera" @click="view">
            <span>詳情</span>
        </button>
    </nav>
    <nav class="tb-opera" v-else-if="_mode == 2">
        <button class="btn-td_opera" @click="view">
            <span>下載</span>
        </button>
    </nav>
    <nav class="tb-opera" v-else>
        <!-- 絕對單獨的 詳情 字眼 -->
        <button class="btn-td_opera" @click="view">
            <span>詳情</span>
        </button>
    </nav>
</template>
<script>
export default {
    props: [ '_item', '_mode' ],
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