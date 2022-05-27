<template>
    <layout-full :header="'請選擇妳的項目'">
      
      <div class="row_x2 fx-c fx-t" v-if="!loading">
        <div class="px card-project ani_proj_card" v-for="(v, i) in many" :key="i">
          <card-project class="ani_jelly" :one="v" @choise="active"></card-project>
        </div>
      </div>
      <div v-else>
        <loading></loading>
      </div>
    </layout-full>
</template>

<script>
import CardProject from '../../../funcks/ui_layout/card/item/CardProject.vue'
import LayoutFull from '../../../funcks/ui_layout/layout/full/LayoutFull.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { LayoutFull, CardProject, Loading },
  async mounted() {
    await this.fetch()
    this.init()
  },
  methods: {
    init() {
      const _id = sessionStorage.getItem('gendford_project_id')
      if (!_id || _id == 0) { } else { console.log('擁 有 ID') }
    },

    async active(one) {
      await sessionStorage.setItem('gendford_project_id', one.uid)
      await this.$store.commit('changeActive', [ 'project_id', one.uid ])
      this.go('/admin')
    },

    async fetch() {
      this.loading = true
      this.many = await this.serv.project.get(this)
      console.log('this.many =', this.many)
      setTimeout(e => this.loading = false, 200)
    }
  },
  computed: {
    project_id() { return this.$store.state.active.project_id }
  },
  data() {
    return {
      loading: true,
      many: [
        {
          id: 1, name: 'HKD Project 007',
          commission_date: '2022-02-03', 
          location: {
            photo: '',
            address: '香港九龍匯源大廈天河路123號C棟218香港'
          }
        }
      ],
      items: [
        
      ]
    }
  }
}
</script>

<style lang="sass">
</style>