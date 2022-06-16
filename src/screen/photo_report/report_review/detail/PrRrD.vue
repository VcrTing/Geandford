<template>
    <layout-screen-form @back="go('/admin/photo_report/photo_report_review')">
        <div class="w-100" slot="cont">
            <panel-def :head="'基本信息'">
                <cp-pr-d-base-msg :load="loading" :one="item"></cp-pr-d-base-msg>
            </panel-def>
            <panel-def :head="'位置'">
                <p class="fx-l">位置：
                    <span v-if="!loading">{{ item.location.address }}</span>
                    <span v-else>...</span>
                </p>
            </panel-def>

            <panel-def :head="'照片'">
                <pr-rr-d-tp-tr></pr-rr-d-tp-tr>
                <ui-page-empty :ioad_size="0" :load="loading" :srcs="photos" :is_page="false">
                    <nav class="table-photo">
                        <pr-rr-d-tp-td v-for="(v, i) in photos" :key="i" :one="v"></pr-rr-d-tp-td>
                    </nav>
                </ui-page-empty>
                <div class="pb"></div>
            </panel-def>

            <panel-def :head="'發送列表'">
                <p class="fs_s">類別：
                    <span v-if="!loading">
                        <span v-for="(v, i) in item.job_function" :key="i" :class="{ 'd-n': !v }">{{ i }}</span>
                    </span><span v-else>...</span>
                </p>
                <h4 class="pb">其他收件人</h4>
                <div class="table-iine-in">
                    <pr-rr-d-tr-tr></pr-rr-d-tr-tr>
                    <ui-page-empty :ioad_size="0" :is_page="false" :load="loading" :srcs="reciver">
                        <pr-rr-d-tr-td v-for="(v, i) in reciver" :key="i" :one="v"></pr-rr-d-tr-td>
                    </ui-page-empty>
                </div>
            </panel-def>
            <h5 class="pb">附件</h5>
            <div class="table-iine">
                <pr-rr-d-tf-tr></pr-rr-d-tf-tr>
                <ui-page-empty :is_page="false" :load="loading" :srcs="add_fs">
                    <pr-rr-d-tf-td v-for="(v, i) in add_fs" :key="i" :one="v"></pr-rr-d-tf-td>
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
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'

export default {
    methods: {
        async fetching() {
            this.loading = true
            let res = await this.serv.photo_report.one(this, this.uid, null)
            this.item = res
            console.log('MANY =', res)
            setTimeout(e => this.loading = false, 2400)
        },
    },
    computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },
        photos() { return this.item.photo },
        reciver() { return this.item.contact},
        add_fs() { return this.item.additional_files }
    },
    data() {
        return {
            loading: true, item: { },
        }
    },
    async mounted() { this.fetching() },
    components: { LayoutScreenForm, PanelDef, CpPrDBaseMsg, PrRrDTpTr, PrRrDTpTd, UiPageEmpty, PrRrDTrTr, PrRrDTrTd, PrRrDTfTr, PrRrDTfTd, Loading },
}
</script>

<style>

</style>