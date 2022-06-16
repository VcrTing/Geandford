<template>
  
</template>

<script>
export default {
    mounted() {
        this.check()
        this.proDetail()
    },
    computed: {
        pro_id() { return this.$store.state.active.project_id }
    },
    methods: {
        async proDetail() {
            const id = this.pro_id
            if (id && id !== 0) {
                const res = await this.serv.project.one(this, id, { })
                this.$store.commit('change', [ 'project', res ])
                // console.log('当前项目 =', res)
            }
        },

        check() {
            const _id = sessionStorage.getItem('gendford_project_id')
            if (!_id || _id == 0) { this.go('/project') } else {
                // console.log('已选取 项目')
            }
        }
    }
}
</script>

<style>

</style>