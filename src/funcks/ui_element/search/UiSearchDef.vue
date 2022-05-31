<template>
    <nav class="ip-icon-l_x2">
        <input v-model="q" @keyup.enter="submit" :placeholder="pahd"
        class="input search" type="text">
        <icon-input :name="'search'"></icon-input>
    </nav>
</template>
<script>
import IconInput from '../../ui_static/icon/IconInput.vue'
export default {
  components: {IconInput },
    props: {
        pahd: { type: String, default: '请输入名称或编号进行搜索' }
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