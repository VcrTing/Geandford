<template>
    <div class="layout-full">
        <div class="fx-s pb">
            <div class="layout-full-logo">
                <logo class="img"></logo>
            </div>
        </div>
        <div class="fx-s layout-full-tit">
            <div class="w-30"></div>
            <div class="w-40 t-c">
                <h1>{{ header }}</h1>
            </div>
            <div class="w-30 t-r">
                
            </div>
        </div>
        <div class="py">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Logo from '../../../ui_static/logo/Logo.vue'
export default {
  components: { Logo },
    props: [ 'header' ]
}
</script>

<style>

</style>