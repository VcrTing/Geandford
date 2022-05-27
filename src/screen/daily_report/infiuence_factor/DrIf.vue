<template>
    <layout-screen>
        <layout-filter-period slot="bar"></layout-filter-period>

        <nav slot="cont" class="w-100">
            <div class="row_x2 fx-l fx-wp">
                <div class="w-333" v-for="(v, i) in many" :key="i">
                    <card-factor-influe :one="v"></card-factor-influe>
                </div>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import LayoutFilterPeriod from '../../../funcks/ui_layout/filter/LayoutFilterPeriod.vue'
import CardFactorInflue from '../../../funcks/ui/card/factor/CardFactorInflue.vue'
export default {
  components: { LayoutScreen, UiPageEmpty, UiTdItemsWrapper, LayoutFilterPeriod, CardFactorInflue },
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
            loading: true, many: [ 
                { 
                    tit: '时间影响',
                    uid: 'project-0001;user-0001', date: '2022-12-12', msg: '这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明',
                    remark: '这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注', file: [ { name: '文件-01.pdf' }, { name: '文件-02.pdf' } ]
                },
                { 
                    tit: '安全问题',
                    uid: 'project-0001;user-0001', date: '2022-12-12', msg: '这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明',
                    remark: '这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注', file: [ { name: '文件-01.pdf' }, { name: '文件-02.pdf' } ]
                },
                { 
                    tit: '已查明阻碍原因',
                    uid: 'project-0001;user-0001', date: '2022-12-12', msg: '这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明',
                    remark: '这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注', file: [ { name: '文件-01.pdf' }, { name: '文件-02.pdf' } ]
                },
                { 
                    tit: '已查明阻碍原因',
                    uid: 'project-0001;user-0001', date: '2022-12-12', msg: '这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明这里是说明',
                    remark: '这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注', file: [ { name: '文件-01.pdf' }, { name: '文件-02.pdf' } ]
                } 
            ],
        }
    },
    async mounted() { this.fetching() }
}
</script>

<style>

</style>