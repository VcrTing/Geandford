<template>
    <nav class="ip-icon-l_x2">
        <icon-normal @click="submit" class="i_x2" :named="'search'"></icon-normal>
        <input v-model="q" @keyup.enter="submit" :placeholder="pahd"
        class="input search" type="text">
    </nav>
</template>
<script>
import IconNormal from '../../ui_static/icon/IconNormal.vue'
export default {
  components: { IconNormal },
    props: {
        pahd: { type: String, default: 'Search' }
    },
    data() {
        return {
            q: ''
        }
    },
    watch: {
        q(n, o) { this.submit() }
    },
    methods: {
        submit() {
            this.$emit('search', this.q)
        }
    }
}
</script>