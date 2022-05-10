<template>
    <div class="fx-s">
        <div class="w-50 fx-l">
            <h2 class="d-ib" v-html="header"></h2>
            <slot name=""></slot>
        </div>
        <div class="w-50 t-r">
            <slot name="cont"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'header' ]
}
</script>