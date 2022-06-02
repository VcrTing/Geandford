<template>
  <nav>
    <router-view v-if="$store.state.user"/>
    <loading v-else></loading>
    <tookit-check-user></tookit-check-user>
  </nav>
</template>

<script>
import TookitCheckUser from '../../funcks/ui_tookit/check/TookitCheckUser.vue'
import Loading from '../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { TookitCheckUser, Loading },

}
</script>

<style>

</style>