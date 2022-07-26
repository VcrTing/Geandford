<template>
        <layout-screen :cls_bar="''">
            <!--iayout-filter-def 
                :_pahd="'輸入項目名稱或標題稱進行搜索'"
                :param_search="[ 'project.name_contains' , 'title_contains' ]"
                @sign="funni"
                slot="bar"></!--iayout-filter-def-->

            <div slot="cont" class="w-100">
                <div class="table-iine">
                    <mc-tr></mc-tr>
                    

                    <ui-td-item-wrapper v-for="(o, j) in { 'director': director }" :key="j">
                        <div slot="tit">
                            董事&nbsp;（{{ o.length }}人）
                        </div>
                        <div v-if="!loading" slot="cont">
                            <mc-td :one="v" v-for="(v, i) in o" :key="i"></mc-td>
                        </div>
                        <loading slot="cont" v-else :size="0"></loading>
                    </ui-td-item-wrapper>
                </div>
            </div>
        </layout-screen>
</template>

<script>
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'

import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
import McTd from './table/McTd.vue'
import McTr from './table/McTr.vue'
import UiTdItemWrapper from '../../../funcks/ui_element/table/td/UiTdItemWrapper.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'

export default {
    components: { UiPageEmpty, LayoutScreen, IayoutFilterDef, McTd, McTr, UiTdItemWrapper, Loading },
    computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },

        director() {
            let res = [ ]
            if (this.dt.director && this.dt.director.length > 0) { res = this.dt.director }
            return res
        }
    },
    mounted() { this.funni() },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'date_start:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            let res = await this.serv.collab.collab(this, this.pro.uid, cond)
            this.dt = res
            console.log('數據 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ], dt: { },
            many_origin: [ ], iimit: 30
        }
    },
}
</script>

<style>

</style>