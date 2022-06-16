<template>
    <layout-screen>

        <iayout-filter-def 
            :_pahd="'輸入課程標題進行搜索'"
            :param_search="[ 'course_title_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>

        <ui-menu-second slot="left" v-if="!loading" :items="tabs"
            :def="second" @change="(v) => second = v" @content="(v) => conts = v['drawing_list']"
        ></ui-menu-second>

        <nav slot="cont" class="w-100 ">

            <div class="table-iine">
                <dr-bcd-tr></dr-bcd-tr>

                <ui-empty-def class="br" :_cis="''" :_ioad_size="1" :_ioad="loading" :_srcs="conts">
                    <cp-bc-dr-td-wrapper v-for="(m, j) in conts" :key="j"
                        :one="m" :index="j" :tit="'物品'"
                    >
                        <dr-bcd-td :outter="m" v-for="(v, i) in m.drawing_forms" :key="i" :one="v"></dr-bcd-td>
                    </cp-bc-dr-td-wrapper>
                </ui-empty-def>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import PanelMenuSecond from '../../../funcks/ui/panel/PanelMenuSecond.vue'
import UiMenuSecond from '../../../funcks/ui_element/menu/UiMenuSecond.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import DrBcdTd from './table/DrBcdTd.vue'
import DrBcdTr from './table/DrBcdTr.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
import UiEmptyDef from '../../../funcks/ui_view/empty/UiEmptyDef.vue'
import CpBcDrTdWrapper from '../../../component/daily_report/bc_drawing_report/CpBcDrTdWrapper.vue'

export default {
    components: { LayoutScreen, PanelMenuSecond, DrBcdTr, DrBcdTd, UiMenuSecond, IayoutFilterDef, UiEmptyDef, CpBcDrTdWrapper },
     computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },

        tabs() { return this.many_origin }
    },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'date:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            let res = await this.serv.daily.drawing_report(this, this.pro.uid, cond)
            this.many_origin = res; this.second = res[0].id
            console.log('数据 drawing_report =', res)
        },
    },

    data() {
        return {
            second: 0, conts: [], loading: true, many: [ ], many_origin: [ ], iimit: 50
        }
    },
}
</script>

<style>

</style>