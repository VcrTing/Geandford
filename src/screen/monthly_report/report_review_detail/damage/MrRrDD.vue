<template>
    <div>
        <div class="table-iine-in">
            <mr-rr-d-d-tr></mr-rr-d-d-tr>
            <ui-page-empty :ioad_size="0" :is_page="false" :load="loading" :srcs="many">
                <mr-rr-d-d-td :one="v" v-for="(v, i) in many" :key="i"></mr-rr-d-d-td>
            </ui-page-empty>
        </div>
        <mr-rr-rfi :send_iist="one.send_list" :contact="one.additional_contact"></mr-rr-rfi>
    </div>
</template>

<script>
import MrRrDDTd from './table/MrRrDDTd.vue'
import MrRrDDTr from './table/MrRrDDTr.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrRrRfi from '../rfi/MrRrRfi.vue'
export default {
  components: { MrRrDDTr, MrRrDDTd, UiPageEmpty, MrRrRfi },
    props: {
        one: {
            type: Object
        }
    },
    computed: {
        many() { return this.one.damage_list }
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