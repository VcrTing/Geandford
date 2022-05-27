<template>
  
</template>

<script>
export default {
    created() {
        const $st = this.$store

        const store = sessionStorage.getItem('store')
        if (store) {
            $st.replaceState(
                Object.assign( { }, $st.state, JSON.parse(store) )
            )
        }

        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('store', JSON.stringify($st.state))
        })
    },
    methods: {

    }
}
</script>

<style>

</style>