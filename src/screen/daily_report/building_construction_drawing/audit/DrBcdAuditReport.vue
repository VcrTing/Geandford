<template>
    <layout-screen-form @back="go('/admin/daily_report/building_construction_drawing')">
        <div slot="cont">
            
            <panel-def :head="'基本信息'">
                <cp-bcd-ar-base-msg :ioad="loading" :one="detai"></cp-bcd-ar-base-msg>
            </panel-def>

            <p class="h3 pt">C.C</p>
            <div class="table">
                
                <drbcd-ar-tr></drbcd-ar-tr>

                <ui-empty-def :_ioad_size="1" :_srcs="[ ccs ]" :_ioad="loading">
                    <ui-td-items-wrapper v-for="(m, j) in ccs" :key="j"
                        :index="null" :tit="j" :is_nuii="m.length <= 0"
                    >
                        <drbcd-ar-td v-for="(v, i) in m" :key="i" :one="v"></drbcd-ar-td>
                    </ui-td-items-wrapper>
                </ui-empty-def>
            </div>
        </div>
    </layout-screen-form>
</template>

<script>
import CpBcdArBaseMsg from '../../../../component/daily_report/audit_report/CpBcdArBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTdItemsWrapper from '../../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import UiEmptyDef from '../../../../funcks/ui_view/empty/UiEmptyDef.vue'
import DrbcdArTd from './table/DrbcdArTd.vue'
import DrbcdArTr from './table/DrbcdArTr.vue'
export default {
    components: {
    LayoutScreenForm,
    PanelDef,
    CpBcdArBaseMsg,
    DrbcdArTr,
    UiTdItemsWrapper,
    DrbcdArTd,
        UiEmptyDef,
    
},
    computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },

        ccs() {
            return this.detai && this.detai.review_detail ? this.detai.review_detail.cc : []
        }
    },
    mounted() {
        this.fetching()
    },
    methods: {
        async fetching() {
            this.loading = true
            let res = await this.serv.daily.drawing_form(this, 'uid/' + this.uid, {})

            console.log('RES =', res)

            this.detai = res && res.length > 0 ? res[0] : null
            setTimeout(e => this.loading = false, 300)
        },
    },
    data() {
        return {
            tab: 0,
            loading: true, detai: { }, many: [ ]
        }
    }
}
</script>

<style>

</style>