<template>
    <div class="fx-s crumb">
        <nav class="fx-l">
            <div v-for="(v, i) in crumbs" :key="i" class="">
                <div class="d-ib" :class="{ ' ': i < long, '': i >= long }">{{ txts[v] }}</div>
                <span v-if="i < long" class="pl_n pr op-80">/</span>
            </div>
        </nav>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crumbs: [

            ],
            txts: {
                
            }
        }
    },
    computed: {
        long() { return this.crumbs.length - 1 }
    },
    watch: {
        '$route': (n, o) => {
            // console.log('開始監察')
        }
    },
    mounted() {
        let res = this.$route.path.split('/')
        this.crumbs = res ? res.filter(e => e != '').filter(e => e != 'admin') : []

        this.txts = this.conf.funcks.TIT
    }
}
</script>

<style>

</style>