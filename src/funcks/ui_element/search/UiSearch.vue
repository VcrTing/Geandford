<template>
    <nav class="ui-search">
        <input v-model="q" @keyup.enter="submit" :placeholder="pahd" class="input" type="text">
        <icon-input @tap="submit" :name="'search'"></icon-input>
    </nav>
</template>
<script>
import IconInput from '../../ui_static/icon/IconInput.vue'
export default {
  components: {IconInput },
    props: {
        pahd: { type: String, default: '搜索' }
    },
    data() {
        return {
            q: ''
        }
    },
    watch: {
        // q(n, o) { this.submit() }
    },
    methods: {
        submit() {
            this.$emit('search', this.q)
        }
    }
}
</script>