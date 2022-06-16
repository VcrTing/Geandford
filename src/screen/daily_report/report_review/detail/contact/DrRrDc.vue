<template>
    <div class="table"> 
        <dr-rr-dc-tr></dr-rr-dc-tr>

        <ui-td-items-wrapper v-for="(m, j) in cc" :key="j"
            :index="null" :tit="j"
        >
            <dr-rr-dc-td  v-for="(v, i) in m" :key="i" :one="v"></dr-rr-dc-td>
        </ui-td-items-wrapper>
    </div>
</template>

<script>
import UiTdItemsWrapper from '../../../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import UiPageEmpty from '../../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrRrDcTd from './table/DrRrDcTd.vue'
import DrRrDcTr from './table/DrRrDcTr.vue'
export default {
  components: { UiPageEmpty, DrRrDcTr, DrRrDcTd,
    UiTdItemsWrapper },
    props: [ 'one' ],
    computed: {
        cc() {
            return this.one.cc
        }
    },
    mounted() {
        this.fetching()
    },
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 500);
        }
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