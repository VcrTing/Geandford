<template>
    <div class="dropdown">
        <nav :id="'popper_trig_' + _uid"><slot name="tit"></slot></nav>
        <div :class="_cis" :id="'popper_cont_' + _uid">
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
export default {
    props: [ 'clear', '_cis' ],
    mounted() {
        createPopper(
            document.getElementById('popper_trig_' + this._uid),
            document.getElementById('popper_cont_' + this._uid), {
                placement: 'bottom'
            }
        )
    },
}
</script>

<style>

</style>