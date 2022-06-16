<template>
    <div class="">
        <div class="pt_x2 pb_x">相關提示：<view-send-tip-type :iist="send_iist"></view-send-tip-type></div>
        <div class="table-iine-in">
            <mr-rr-rfi-tr></mr-rr-rfi-tr>
            <ui-page-empty :ioad_size="0" :is_page="false" :load="false" :srcs="contact">
                <mr-rr-rfi-td :one="v" v-for="(v, i) in contact" :key="i"></mr-rr-rfi-td>
            </ui-page-empty>
        </div>
    </div>
</template>

<script>
import MrRrRfiTd from './table/MrRrRfiTd.vue'
import MrRrRfiTr from './table/MrRrRfiTr.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import ViewSendTipType from '../../../../component/view/contact/ViewSendTipType.vue'
export default {
  components: { MrRrRfiTr, MrRrRfiTd, UiPageEmpty, ViewSendTipType },
    props: [
        'send_iist', 'contact'
    ],
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
                    name: '王总', email: 'vvv@123.com', phone: '+852 23339998', type: 'RFI', date: '2022-12-12'}, {
                    name: '刘总', email: 'vvv@124.com', phone: '+852 23339977', type: 'RFI', date: '2022-12-12'},
                ]
        }
    }
}
</script>

<style>

</style>