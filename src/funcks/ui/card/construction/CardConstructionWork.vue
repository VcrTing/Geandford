<template>
    <div class="panel card-work">
        <div class="fx-s">
            <h6>{{ head }}</h6>
            <!--button class="btn-pri_thin py_t px_x3">
                <span class="px h4">+</span>
            </button-->
        </div>
        <div class="pt_s">
            <div v-for="(v, i) in items" :key="i">
                <p class="card-work-inn">
                    这里是内容
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        head: { type: String },
        items: {
            type: Array,
            default() { return [ {}, {} ] }
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>