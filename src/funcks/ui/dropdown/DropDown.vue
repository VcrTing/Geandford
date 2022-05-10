<template>
    <div class="dropdown">
        <nav>
            <slot name="tit"></slot>
        </nav>
        <div
            :class="{
                'bxs br': !clear,
                
                'active': down
            }"
        >
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'clear',
        'def'
    ],
    data() {
        return {
            down: false
        }
    },
    mounted() {
        this.down = this.def ? true : false
    },
    methods: {
        change() {
            this.down = !this.down
        },
    }
}
</script>

<style>

</style>