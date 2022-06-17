<template>
    <div class="loading-pan" :class="{ 
        'loading_s': size == -1,  
        'loading_m': size == 0,  
        'loading_x': size == 2
    }">
        <div class="spinner" :class="_class">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'size',
        '_class'
    ]
}
</script>

<style lang="sass">
  
</style>