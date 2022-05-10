<template>
    <div class="modal" :class="{ 'modal-active': open }">
        <div class="modal-hui" @click="change"></div>
        
        <div class="modal-center">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { def: -1 }
    },
    mounted() { this.def = this.$store.state.funck.modal_form },
    computed: {
        index() { return this.$store.state.funck.modal_form },
        open() { return ( this.index > 0 ) }
    },
    watch: {
        open(n, o) {
            console.log('MODAL 开启 =', n)
        },
        index(n, o) {
            console.log('更改 index =', n)
        }
    },
    methods: {
        change() {
            this.$store.commit(
                'changeFunck', 
                [ 'modal_form', this.open ? 0 : this.def ])
        }
    }
}
</script>