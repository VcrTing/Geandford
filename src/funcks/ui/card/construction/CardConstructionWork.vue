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
                'slow': '狀況：慢',
                'quick': '狀況：快'
            }
        }
    },
    methods: {
        tit(v) {
            return v ? this.txts[ v ]: '任務'
        }
    }
}
</script>

<style lang="sass" scoped>
.card-work-inn
</style>