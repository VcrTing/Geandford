<template>
    <nav class="input-icon-l search-top">
        <input v-model="q" @keyup.enter="submit" class="search" type="text" :placeholder="pahd">
    </nav>
</template>
<script>
export default {
    props: {
        pahd: { type: String, default: 'Search' }
    },
    data() {
        return {
            q: ''
        }
    },
    methods: {
        submit() {
            console.log('搜索 Q =', this.q)
        }
    }
}
</script>