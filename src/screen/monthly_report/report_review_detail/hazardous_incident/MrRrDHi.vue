<template>
    <div>
        <div class="table-iine-in">
            <mr-rr-d-hi-tr></mr-rr-d-hi-tr>
            <ui-page-empty :ioad_size="0" :is_page="false" :load="loading" :srcs="many">
                <mr-rr-d-hi-td :one="v" v-for="(v, i) in many" :key="i"></mr-rr-d-hi-td>
            </ui-page-empty>
        </div>
        <mr-rr-rfi :send_iist="one.send_list" :contact="one.additional_contact"></mr-rr-rfi>
    </div>
</template>

<script>
import MrRrDHiTd from './table/MrRrDHiTd.vue'
import MrRrDHiTr from './table/MrRrDHiTr.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrRrRfi from '../rfi/MrRrRfi.vue'
export default {
  components: { MrRrDHiTd, MrRrDHiTr, UiPageEmpty, MrRrRfi },
    props: {
        one: {
            type: Object
        }
    },
    computed: {
        many() { return this.one.hazardous_incident_list }
    },
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
        }
    }
}
</script>

<style>

</style>