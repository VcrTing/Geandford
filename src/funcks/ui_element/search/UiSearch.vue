<template>
    <div class="px-0 py-0 br_x4" v-if="mode == 0">
        <nav class="ip-icon-l_x2 br_x4">
            <icon-normal @click="submit" class="i_x2" :named="'search'"></icon-normal>
            <input v-model="q" @keyup.enter="submit" class="input search input-7 w-100-p bxs" type="text" :placeholder="pahd">
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