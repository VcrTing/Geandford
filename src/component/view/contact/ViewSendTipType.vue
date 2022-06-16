<template>
    <div class="d-ib">
        <span v-for="(v, i) in iist" :key="i" :class="{ 'd-n': !v }">{{ i }}<span>，</span></span>
        <span v-if="!has">（無）</span>
    </div>
</template>

<script>
export default {
    props: {
        'iist': {
            type: Object
        }
    },
    computed: {
        has() {
            let res = false
            for(let k in this.iist) {
                if (this.iist[ k ]) { res = true }
            }
            return res
        }
    }
}
</script>

<style>

</style>