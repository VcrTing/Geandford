<template>
    <div v-if="mode == 0">
        <nav class="ip-icon-l_x2 br_x4">
            <icon-normal @click="submit" class="i_x2" :named="'search'"></icon-normal>
            <input v-model="q" @keyup.enter="submit" :placeholder="pahd"
            class="input search bxs ip-tr" type="text"
            :class="_class"
            >
        </nav>
    </div>
</template>
<script>
import IconNormal from '../../ui_static/icon/IconNormal.vue'
export default {
  components: { IconNormal },

    props: {
        mode: {
            type: Number,
            default: 0
        },
        pahd: {
            type: String,
            default: 'Search'
        },
        _class: {
            type: String,
            default: ' w-100'
        }
    },
    data() {
        return {
            q: ''
        }
    },
    methods: {
        submit() {
            this.$emit('sign', this.q)
        }
    }
}
</script>