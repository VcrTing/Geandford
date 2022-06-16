<template>
    <div class="panel card-work">
        <div class="card-work-inn" v-for="(v, i) in items" :key="i">
            <h6>{{ tit(v.status) }}</h6>
            <div class="pt_s">
                {{ v.description }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default() { return [ {}, {} ] }
        }
    },
    data() {
        return {
            txts: {
                'slow': '状况：慢',
                'quick': '状况：快'
            }
        }
    },
    methods: {
        tit(v) {
            return v ? this.txts[ v ]: '任务'
        }
    }
}
</script>

<style lang="sass" scoped>
.card-work-inn
</style>