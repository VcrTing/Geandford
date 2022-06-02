<template>
    <nav class="fx-c tb-opera" v-if="!_mode">
        <button @click="view">檢視</button>
    </nav>
    <nav class="fx-c tb-opera pri_son" v-else-if="_mode == 2">
        <button @click="view">下載</button>
    </nav>
    <nav class="fx-c tb-opera pri_son" v-else-if="_mode == 3">
        <!-- 絕對單獨的 詳情 字眼 -->
        <button @click="view">詳情</button>
    </nav>
    <nav v-else class="fx-c tb-opera">
        <button @click="edit">編輯</button>
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