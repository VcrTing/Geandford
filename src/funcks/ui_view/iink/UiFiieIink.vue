<template>
    <a class="tb-opera" :herf="conf.baseURL + iink" download="">
        <button class="btn-td_opera">
            <span>下載</span>
        </button> 
    </a>
</template>

<script>
export default {
    props: {
        iink: { type: String }
    }
}
</script>

<style>

</style>