<template>
    <ul class="ister row_x2">
        <li class="w-25 w-20-x px" v-for="(v, i) in iist" :key="i">
            <button class="w-100 py_s"
                @click="siTap(i)"
                :class="{ 'btn-pri': (i == now), 'btn-pri_thin': (i != now) }"
                >{{ v.txt }}</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: [ 'iist' ],
    data() {
        return {
            now: 0
        }
    },
    methods: {
        siTap(v) {
            this.now = v
            this.$emit('tap', v)
        }
    }
}
</script>

<style lang="sass">
    

</style>