<template>
    <div class="fx-c">
        <div class="fx-l" v-for="(v, i) in tabs" :key="i">
            <div class="fx-l" @click="show(v.tab, i)">
                <button class="btn-tab"
                    :class="{ 'btn-pri': actv(i), 'btn-die': !actv(i) }"
                ><h4>{{ i + 1 }}</h4></button>
                <span class="pl pri"
                    :class="{ 'pri': actv(i), 'sus': !actv(i) }"
                >{{ v.txt }}</span>
            </div>
            <div v-if="i < (tabs.length - 1)" class="px_x2">
                <div class="step-ine"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        show(tb, i) {
            this.now = i
            this.$emit('tab', tb)
        },
        actv(tb) { return this.now == tb }
    },
    computed: {
    },
    data() {
        return {
            now: 0,
            tabs: [
                {
                    tab: 1, txt: '填写基本信息'
                },
                {
                    tab: 2, txt: '填写联络人信息'
                }
            ]
        }
    }
}
</script>

<style lang="sass">
.btn-tab
    border-radius: 100%
    width: 3.2em !important
    height: 3.2em !important

.step-ine
    width: 9vw
    height: 1px
    border-radius: 2em
    background: #ccc
</style>