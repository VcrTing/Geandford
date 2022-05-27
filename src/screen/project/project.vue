<template>
  <nav>
    <router-view/>
    <tookit-check-user></tookit-check-user>
  </nav>
</template>

<script>
import TookitCheckUser from '../../funcks/ui_tookit/check/TookitCheckUser.vue'
export default {
  components: { TookitCheckUser },

}
</script>

<style>

</style>