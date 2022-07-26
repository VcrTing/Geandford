<template>
    <div class="fx-r" @click="auth">
        <!--img class="user-face hand" :src="user.avatar"-->
        <div class="user-name pl ttd hand t-cap fx-r">
            <div class="pr_x2">{{ user.username }}&nbsp;</div>
            <icon-exp class="i-home op-85" :_name="'home'"></icon-exp>
        </div>
    </div>
</template>

<script>
import IconExp from '../../ui_static/icon/IconExp.vue'
export default {
  components: { IconExp },
    computed: {
        user() { return this.$store.state.user }
    },
    methods: {
        auth() {
        }
    }
}
</script>

<style lang="sass">
.i-home img

    transform: translate3d(-85%, -50%, 0)
</style>