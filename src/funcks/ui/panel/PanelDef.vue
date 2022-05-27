<template>
    <div class="panel bxs br upper_x2">
        <h4 v-if="head">{{ head }}</h4>
        <div :class="{ 'pt_x': head }" class="upper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'head' ]
}
</script>
