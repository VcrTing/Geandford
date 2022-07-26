<template>
    <div class="menu-auth-card">
        <nav>

        </nav>

        <div class="fx-s">
            <!--img class="img round w-33" :src="user.avatar"-->
            <div class="w-90 pl_s">
                <div class="pb_s t-cap b">{{ user.username }}</div>
                <span class="sus">{{ user.part }}</span>
            </div>
        </div>


        <div class="VERSION">
            <span>版本</span>:&nbsp;{{ conf.VERSION }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() { return this.$store.state.user }
    },
}
</script>

<style lang="sass" scoped>
.VERSION
    text-align: right
    position: absolute
    z-index: 999
    bottom: 0
    left: 0
    width: 100%
    color: #d9c795 // #f6b708 
    padding: 0px 12px !important
    span
        font-size: 0.86em !important
</style>