<template>
    <layout-screen-form>
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-pr-d-base-msg></cp-pr-d-base-msg>
            </panel-def>
            <panel-def :head="'位置'">
                <p>
                    位置：<span>1901, xiangang, jiulong</span>
                </p>
            </panel-def>

            <panel-def :head="'照片'">
                <pr-rr-d-tp-tr></pr-rr-d-tp-tr>
                <ui-page-empty :load="loading" :srcs="many_photo" :is_page="false">
                    <nav class="table-photo">
                        <pr-rr-d-tp-td v-for="(v, i) in many_photo" :key="i" :one="v"></pr-rr-d-tp-td>
                    </nav>
                </ui-page-empty>
                <div class="pb"></div>
            </panel-def>

            <panel-def :head="'發送列表'">
                <p class="fs_s">類別：<span>RFI</span></p>
                <h4 class="pb">其他收件人</h4>
                <div class="table-iine">
                    <pr-rr-d-tr-tr></pr-rr-d-tr-tr>
                    <ui-page-empty :is_page="false" :load="loading" :srcs="many_reciver">
                        <pr-rr-d-tr-td v-for="(v, i) in many_reciver" :key="i" :one="v"></pr-rr-d-tr-td>
                    </ui-page-empty>
                </div>
            </panel-def>
            <h5 class="pb">附件</h5>
            <div class="table-iine">
                <pr-rr-d-tf-tr></pr-rr-d-tf-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="many_file">
                    <pr-rr-d-tf-td v-for="(v, i) in many_file" :key="i" :one="v"></pr-rr-d-tf-td>
                </ui-page-empty>
            </div>
            
        </div>
    </layout-screen-form>
</template>

<script>
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import CpPrDBaseMsg from '../../../../component/photo/photo_review/CpPrDBaseMsg.vue'
import PrRrDTpTr from './table_photo/PrRrDTpTr.vue'
import PrRrDTpTd from './table_photo/PrRrDTpTd.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import PrRrDTrTr from './table_reciver/PrRrDTrTr.vue'
import PrRrDTrTd from './table_reciver/PrRrDTrTd.vue'
import PrRrDTfTr from './table_file/PrRrDTfTr.vue'
import PrRrDTfTd from './table_file/PrRrDTfTd.vue'
export default {
  components: { LayoutScreenForm, PanelDef, CpPrDBaseMsg, PrRrDTpTr, PrRrDTpTd, UiPageEmpty, PrRrDTrTr, PrRrDTrTd, PrRrDTfTr, PrRrDTfTd },
methods: {
        pagenation(n, ong, limit) {

        },
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 2400)
        },
    },
    data() {
        return {
            loading: true, many_photo: [ 
                { 
                    name: '29990=awqeqweq--12',
                    remark: '施工圖片', 
                    date: '2022-12-12 12:12',
                    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656501007&t=5cdb97e7d0e74a55df61b88f3b98405e',
                },
                { 
                    name: '29990=awqeqweq--1233',
                    remark: '施工圖片 222', 
                    date: '2022-12-12 12:12',
                    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F28%2F20191228105602_4Wm5z.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656501790&t=37f804c0b4b5416d8a8d4ec538557c0d',
                }
            ],
            many_reciver: [
                { name: 'Eric', email: 'qiong@163.com', phone: '+852 9999999', type: 'REF' },
                { name: 'Eric 2', email: 'qiong@163.com', phone: '+852 9999999', type: 'REF' },
                { name: 'Eric 3', email: 'qiong@163.com', phone: '+852 9999999', type: 'REF' }
            ],
            many_file: [
                { file: 'Kis ten shit.pdf' },
                { file: 'Kis ten shit.pdf' },
            ]
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>