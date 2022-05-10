<template>
    <nav class="input-icon-l">
        <i class="mdi mdi-magnify h5"></i>
        <input v-model="q" @keyup.enter="submit" class="input search" type="text" :placeholder="pahd">
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