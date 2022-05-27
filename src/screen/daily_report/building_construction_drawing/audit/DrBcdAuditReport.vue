<template>
    <layout-screen-form>
        <div slot="cont">
            
            <panel-def :head="'基本信息'">
                <cp-bcd-ar-base-msg></cp-bcd-ar-base-msg>
            </panel-def>

            <p class="h3 pt_x2">C.C</p>
            <div class="table">
                
                <drbcd-ar-tr></drbcd-ar-tr>
                    <ui-td-items-wrapper v-for="(m, j) in many" :key="j"
                        :index="null" :tit="m.name" :plus="'添加 ' + m.name"
                    >
                        <drbcd-ar-td v-for="(v, i) in m.children" :key="i" :one="v"></drbcd-ar-td>
                    </ui-td-items-wrapper>
            </div>
        </div>
    </layout-screen-form>
</template>

<script>
import CpBcdArBaseMsg from '../../../../component/daily_report/audit_report/CpBcdArBaseMsg.vue'
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import UiTdItemsWrapper from '../../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
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
    },
    data() {
        return {
            loading: true, many: [ { 
                name: 'RSE',
                children: [ {
                    name: 'Alice dreaming', email: 'alice-alice@123.com', phone: '+852 92779625'
                }]}, { 
                name: 'E&M',
                children: [ {
                    name: 'Alice dreaming', email: 'alice-alice@123.com', phone: '+852 92779625'
                }]}, { 
                name: 'QS',
                children: [ {
                    name: 'Alice dreaming', email: 'alice-alice@123.com', phone: '+852 92779625'
                }]},  { 
                name: '其他',
                children: [ {
                    name: 'Alice dreaming', email: 'alice-alice@123.com', phone: '+852 92779625'
                }]}, 
            ],
        }
    }
}
</script>

<style>

</style>