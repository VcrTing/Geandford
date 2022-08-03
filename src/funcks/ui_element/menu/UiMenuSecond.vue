<template>
    <panel-menu-second class="pr_x2 righter">
        <ul class="ul-menu-def pb" v-if="items">
            <li class="py_n px pl_x2" v-for="(v, i) in items" :key="i" 
                :class="{ 'active': v.id == now }" @click="option(v.id)">
                <span class="t-cap">
                    {{ v.title }}
                </span>
            </li>    
        </ul>
        <ul v-else class="ul-menu-def">
            <li class="py_n px pl_x2">
                沒有項目
            </li>
        </ul>
    </panel-menu-second>
</template>

<script>
import PanelMenuSecond from '../../ui/panel/PanelMenuSecond.vue'
export default {
  components: { PanelMenuSecond },

    methods: {
        option(pk) {
            this.now = pk
            this.$emit('change', pk)
        },
        cont(pk) { let res = this.items.filter(e => { return e.id == pk }); return res && res.length > 0 ? res[0] : {} }
    },
    watch: {
        now(n, o) {
            this.$emit('content', this.cont(n))
        }
    },
    mounted() {
        this.now = this.def ? this.def : (this.items ? this.items[0] : '')
        this.$emit('content', this.cont(this.now))
    },
    data() { return { now: '' } },
    props: [ 'items', 'plus', 'def' ]
}
</script>

<style>

</style>