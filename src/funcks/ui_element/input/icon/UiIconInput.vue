<template>
    <nav :class="{'input-icon-r': _right, 'input-icon-l': !_right,  }"

    >
        <i class="mdi mdi-account-outline h4"></i>
        <div>
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
        },
        _right: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>

</style>