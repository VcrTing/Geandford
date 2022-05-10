<template>
    <select v-model="nn">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
</template>

<script>
export default {
    props: [ 'def' ],
    data() {
        return {
            nn: 1,
            ops: [
                { txt: '所有', v: 1 },
                { txt: '非所有', v: 2 }
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    watch: {
        nn(n, o) { this.$emit('sign', this.nn) }
    }
}
</script>

<style>

</style>