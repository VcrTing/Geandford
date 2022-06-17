<template>
    <div class="home-ioading fx-c">
        <loading :size="2"></loading>
    </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
  components: { Loading },

}
</script>

<style lang="sass">
.home-ioading
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
</style>