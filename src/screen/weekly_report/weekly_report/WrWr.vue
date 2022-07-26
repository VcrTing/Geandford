<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'輸入項目名稱或負責人名稱進行搜索'" :_timed_1="true"
            :param_search="[ 'project.name_contains' , 'contractor_representative_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>
            
        <div slot="cont" class="w-100">
            <div class="table-iine">
                <wr-wr-tr :srcs="many_origin" @sort="(v) => many_origin = v"></wr-wr-tr>

                <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong" :load="loading" :srcs="many_origin">
                    <wr-wr-td v-for="(v, i) in many" :key="i" :one="v"></wr-wr-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue';
import WrWrTr from './table/WrWrTr.vue';
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue';
import WrWrTd from './table/WrWrTd.vue';
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue';

export default {
    components: { LayoutScreen, WrWrTr, UiPageEmpty, WrWrTd, IayoutFilterDef },
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
        async fetching(cond = { }) {
            let res = await this.serv.weekly.get(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('數據 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ],
            many_origin: [ ], iimit: 30
        }
    },
}
</script>

<style>

</style>