<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'請輸入說明或備註進行搜索'" :_timed_1="true"
            :param_search="[ 'description_contains' , 'issue_by_contains' ]"
            @sign="funni"
            slot="bar">
            
        </iayout-filter-def>

        <nav slot="cont" class="w-100">
            <ui-empty-def :_ioad_size="1" :_ioad="loading" :_srcs="many_origin">
                <div class="f-row row_x2">
                    <div class="w-333" v-for="(v, i) in many_origin" :key="i">
                        <card-factor-influe :one="v"></card-factor-influe>
                    </div>
                </div>
            </ui-empty-def>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import CardFactorInflue from '../../../funcks/ui/card/factor/CardFactorInflue.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
import UiEmptyDef from '../../../funcks/ui_view/empty/UiEmptyDef.vue'
export default {
  components: { LayoutScreen, UiPageEmpty, UiTdItemsWrapper, CardFactorInflue, IayoutFilterDef, UiEmptyDef },
   computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: {
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'date:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(fui) {
            let res = await this.serv.daily.affecting_factor(this, this.pro.uid, fui)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('数据 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ],
            many_origin: [ ], iimit: 30
        }
    },
    // mounted() { this.fetching() },
}
</script>

<style>

</style>