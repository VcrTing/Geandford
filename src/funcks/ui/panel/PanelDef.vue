<template>
    <nav class="panel upper_x2">
        <h4 v-if="head">{{ head }}</h4>
        <div :class="{ 'pt_x': head }" class="upper">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: [ 'head' ]
}
</script>
