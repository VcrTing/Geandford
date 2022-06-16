<template>
    <collapse>
        <div v-for="(v, i) in menu" :key="i">
            <div v-if="!v.type">
                <!-- 多子菜單 -->
                <collapse-menu-item class="menu-many-wrapper" v-if="v.children" :def="now == v.index">
                    <div slot="tit">
                        <i v-if="v.icon" class="h5 collapse-i" :class="v.icon"></i>
                        <span class="pl_x">{{ v.txt }}</span>
                    </div>
                    <div slot="cont" class="collapse-item collapse-menu-item">
                        <menu-item v-for="(m, k) in v.children" :key="k"
                            class="pl_menu" @tap="open(m)"
                            :active="(now_inner == m.index)"
                            :class="{ 'active': now_inner == m.index }"
                            :icon="m.icon" :txt="m.txt" :_need_icon="false"></menu-item>
                    </div>
                </collapse-menu-item>

                <!-- 單 菜單 -->
                <nav class="collapse-item collapse-menu-item" v-else>
                    <menu-item :_need_icon="false" class="menu-one-wrapper" @tap="open(v)" :icon="v.icon" :txt="v.txt" :class="{ 'active': now == v.index }"></menu-item>
                </nav>
            </div>
            <div v-else class="pb">
                <div class="menu-hr"></div>
            </div>
        </div>

    </collapse>
</template>
<script>
import Collapse from '../../../ui/collapse/Collapse.vue'
import CollapseMenuItem from '../../../ui/collapse/menu/CollapseMenuItem.vue'
import MenuItem from '../../../ui/collapse/menu/MenuItem.vue'
export default {
  components: { Collapse, CollapseMenuItem, MenuItem },
  props: {
      menu: {
          type: Array,
          default() {
            return [
                {
                    txt: '表格下載', icon: '',
                    index: 1, link: null,
                    children: [
                        {   txt: '常用表格', icon: '', index: 10, link: '/admin/table_download/often', },
                        {   txt: '進度報告', icon: '', index: 11, link: '/admin/table_download/progress', },
                        {   txt: '執行報告', icon: '', index: 12, link: '/admin/table_download/perform', }
                    ]
                },
                {
                    txt: '日報表', icon: '',
                    index: 8, link: null,
                    children: [
                        {   txt: '建築施工圖報告', icon: '',
                            index: 81, link: '/admin/daily_report/building_construction_drawing' },
                        {   txt: '報告預覽', icon: '',
                            index: 82, link: '/admin/daily_report/report_review' },
                        {   txt: '人力', icon: '',
                            index: 83, link: '/admin/daily_report/man_power' },
                        {   txt: '影響因素', icon: '',
                            index: 84, link: '/admin/daily_report/infi_factor' },
                        {   txt: '安全問題', icon: '',
                            index: 85, link: '/admin/daily_report/safety_problem' },
                    ]
                },
                {   txt: '月報表', icon: '',
                    index: 3, link: null,
                    children: [
                        { txt: '報告預覽', icon: '',
                        index: 31, link: '/admin/monthly_report/report_review'},
                        { txt: '安全培訓', icon: '',
                        index: 32, link: '/admin/monthly_report/safety_training'},
                        { txt: '安全審查', icon: '',
                        index: 33, link: '/admin/monthly_report/safety_review'}
                    ] },

                {   txt: '周報表', icon: '',
                    index: 4, link: '/admin/weekly_report' },
                // {   txt: '文件庫', icon: '', index: 5, link: '/admin/dashboard/' },
                // {   txt: '缺陷整改', icon: '', index: 6, link: '/admin/repair_defects/' },
                {   txt: '相片報告', icon: '',
                    index: 7, link: null,
                    children: [
                        {   txt: '報告預覽', icon: '',
                            index: 71, link: '/admin/photo_report/photo_report_review' },
                        // {   txt: '相關收件人', icon: '', index: 72, link: '/admin/dashboard/' },
                    ]},
                {   txt: '物料', icon: '', index: 11, link: '/admin/material' },
                {
                    txt: '人員', icon: '',
                    index: 12, link: null,
                    children: [
                        {   txt: '協作人士', icon: '',
                            index: 121, link: '/admin/member_coopera' },
                        // {   txt: '相關收件人', icon: '', index: 122, link: '/admin/dashboard/' },
                    ]
                },


                { type: -1, children: [ ] },
                {
                    txt: '施工合約', icon: '',
                    index: 111, link: null,
                    children: [
                        {   txt: '預計外判合約', icon: '',
                            index: 1111, link: '/admin/contract/expect_outso_contract' },
                        {   txt: '實際外判合約', icon: '',
                            index: 1112, link: '/admin/contract/actual_outso_contract' },
                    ]
                },
                {
                    txt: '工程支出', icon: '',
                    index: 112, link: '/admin/cost_statistic/'
                },
            ]
          }
      },
      menu2: {

      }
  },
    data() {
        return {  
            now: -1,
            now_inner: -1,
        }
    },
    mounted() { this.localRoute(this.$route.fullPath) },
    methods: {
        _route(path, rt, index) { 
            if (rt == path || path.indexOf(rt) >= 0) { 
                this.now = index; this.now_inner = -1 } 
        },
        _route_in(path, rt, index) { 
            if (rt == path || path.indexOf(rt) >= 0) { 
                this.now_inner = index; this.now = -1 } 
        },
        localRoute(path) {
            this.menu.map(e => { 
                if (e.link) { this._route(path, e.link, e.index) }
                else { e.children.map(c => { this._route_in(path, c.link, c.index) }) }
            })
        },
        open(v) { 
            this.localRoute(v.link)
            this.$router.push(v.link) 
        },
    }
}
</script>
<style lang="sass" scoped>
</style>