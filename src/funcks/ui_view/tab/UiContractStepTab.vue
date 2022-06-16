<template>
    <div class="fx-c mh-2em">
        <div class="fx-l" v-for="(v, i) in tabs" :key="i">
            <div class="fx-l hand" @click="show(v.tab, i)">
                <button class="btn-tab"
                    :class="{ 'btn-pri': actv(v.tab), 'btn-die': !actv(v.tab) }"
                ></button>
                <span class="pl pri"
                    :class="{ 'pri': actv(v.tab), 'sus': !actv(v.tab) }"
                >{{ v.txt }}</span>
            </div>
            <div v-if="i < (tabs.length - 1)" class="px_x2">
                <div class="step-ine"></div>
            </div>
        </div>
    </div>
    <!--div v-else class="mh-2em">
        <loading :size="-1"></loading>
    </div-->
</template>

<script>
import Loading from '../shimmer/Loading.vue'
export default {
  components: { Loading },
    props: [ 'def' ],
    methods: {
        change(v) { this.now = v },
        show(tb, i) {
            this.now = tb
            this.$emit('tab', tb)
        },
        actv(tb) { return this.now == tb }
    },
    watch: {
        now(n, o) { this.ioad = true, setTimeout(e => this.ioad = false, 300) }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    data() {
        return {
            now: 0, ioad: true,
            tabs: [
                {
                    tab: 1, txt: '工程信息及相关人员'
                },
                {
                    tab: 2, txt: '工程内容及工程范围'
                }
            ]
        }
    }
}
</script>

<style lang="sass">
.btn-tab
    border-radius: 100%
    width: 1em !important
    height: 1em !important

.step-ine
    width: 9vw
    height: 1px
    border-radius: 2em
    background: #ccc
</style>