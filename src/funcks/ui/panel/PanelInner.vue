<template>
    <div class="panel-inner">
        <nav class="fx-s">
            <div class="w-30 px_x2 py_n">
                {{ header }}
                <slot name="prefix"></slot>
            </div>
            <div class="w-70 t-r">
                <slot name="right"></slot>
            </div>
        </nav>
        <div class="py px_x2">
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header' ]
}
</script>
