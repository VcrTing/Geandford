<template>
    <nav class="fx-c pri_son">
        <button @click="view">儲存</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="edit">取消</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item' ],
    methods: {
        view() {
            this.$emit('save')
        },
        edit() {
            this.$emit('cancel')
        }
    }
}
</script>