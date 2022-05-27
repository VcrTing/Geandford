<template>
    <div>
        <div class="table-inn">
            <mr-rr-a-tr></mr-rr-a-tr>
            <ui-page-empty :is_page="false" :load="loading" :srcs="many">
                <mr-rr-a-td :one="v" v-for="(v, i) in many" :key="i"></mr-rr-a-td>
            </ui-page-empty>
        </div>
    </div>
</template>

<script>
import MrRrATd from './table/MrRrATd.vue'
import MrRrATr from './table/MrRrATr.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
export default {
  components: { MrRrATr, MrRrATd, UiPageEmpty },
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 500)
        }
    },
    mounted() { this.fetching() },
    data() {
        return {
            loading: true, 
            many: [ {
                    kiii: 20, accid: 300, date: '2022-12-12'}, {
                    kiii: 20, accid: 300, date: '2022-12-12'} ]
        }
    }
}
</script>

<style>

</style>