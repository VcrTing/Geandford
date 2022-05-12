<template>
    <button class="fx-s" @click="$emit('tap')">
        <div>
            <i v-if="icon" class="h5 collapse-i" :class="icon"></i>
            <span class="pl_x">
                {{ txt }}
            </span>
        </div>
        <i v-if="_need_icon" class="mdi mdi-chevron-right collapse-i"></i>
    </button>
</template>
<script>
export default {
    props: [
        'active',
        'icon',
        'txt',
        '_need_icon'
    ],
    watch: { active(n, o) { if (n) { this.$parent.open = true } } },
}
</script>