<template>
    <panel-menu-second class="pr_x2 righter">
        <ul class="ul-menu-def pb">
            <li class="py_n px pl_x2" v-for="(v, i) in items" :key="i" 
                :class="{ 'active': v.pk == now }" @click="option(v.pk)">
                <span>
                    {{ v.txt }}
                </span>
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
        }
    },
    mounted() {
        this.now = this.def ? this.def : (this.items ? this.items[0] : '')
       
    },
    data() {
        return {
            now: ''
        }
    },
    props: [ 'items', 'plus', 'def' ]
}
</script>

<style>

</style>