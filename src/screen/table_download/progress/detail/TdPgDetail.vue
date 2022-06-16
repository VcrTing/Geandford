<template>
    <layout-screen-form @back="go('/admin/table_download/progress')">
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                
            </panel-def>
        </div>
    </layout-screen-form>
</template>

<script>
import PanelDef from '../../../../funcks/ui/panel/PanelDef.vue'
import LayoutScreenForm from '../../../../funcks/ui_layout/layout/screen/LayoutScreenForm.vue'
import Loading from '../../../../funcks/ui_view/shimmer/Loading.vue'
export default {
    components: { LayoutScreenForm, PanelDef, Loading },
    computed: {
        pro() { return this.$store.state.project },
        uid() { return this.$route.query.id },
    },
    mounted() {
        this.fetching()
    },
    methods: {
        async fetching() {
            this.loading = true
            let res = await this.serv.monthly.safety_review(this, this.pro.uid + '/' + this.uid)

            console.log('RES =', res)

            this.detai = res
            setTimeout(e => this.loading = false, 300)
        },
    },
    data() {
        return {
            tab: 0,
            loading: true, detai: { }
        }
    }
}
</script>

<style>

</style>