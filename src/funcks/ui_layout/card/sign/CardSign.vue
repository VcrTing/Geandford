<template>
    <div class="card-sign">
        <!--div
            :style="{
                'background-image': `url('${ conf.baseURL + one.url }.jpg')`
            }">

        </div-->
        <a class="card-sign-opera" :href="conf.baseURL + one.url">
            <span class="">下载</span>
        </a>
        <img :src="conf.baseURL + one.url"/>
    </div>
</template>

<script>
export default {
    props: {
        one: { type: Object }
    }
}
</script>

<style>

</style>