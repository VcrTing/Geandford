<template>
    <iayout-fuii v-if="!loading_index" :header="'請選擇妳的項目'">
      <div class="row_x2 fx-c fx-t" v-if="!loading">
        <div class="px card-project ani_proj_card" v-for="(v, i) in many" :key="i">
          <card-project class="ani_jelly" :one="v" @choise="active"></card-project>
        </div>
      </div>
      <div v-else>
        <loading></loading>
      </div>

      <sign @sign="init" v-if="$store.state.token"></sign>
    </iayout-fuii>
    <loading-fuii v-else></loading-fuii>
</template>

<script>
import CardProject from '../../../funcks/ui_layout/card/item/CardProject.vue'
import IayoutFuii from '../../../funcks/ui_layout/layout/full/IayoutFuii.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
import Sign from '../../../funcks/ui_tookit/sign/Sign.vue'
import LoadingFuii from '../../../funcks/ui_view/shimmer/LoadingFuii.vue'
export default {
  components: { CardProject, Loading, IayoutFuii, Sign, LoadingFuii },
  
  methods: {
    async init() {
      await this.fetch()
      const _id = sessionStorage.getItem('gendford_project_id')
      if (!_id || _id == 0) { } else { }
    },

    async active(one) {
      this.loading_index = true

      const res = await this.serv.project.one(this, one.uid, { })
      await this.$store.commit('change', [ 'project', res ])

      await sessionStorage.setItem('gendford_project_id', one.uid)
      await this.$store.commit('changeActive', [ 'project_id', one.uid ])

      setTimeout(e => {
        this.go('/admin')
        this.loading_index = false }, 200)
    },

    async fetch() {
      this.loading = true
      this.many = await this.serv.project.get(this)
      setTimeout(e => this.loading = false, 200)
    }
  },
  computed: {
    project_id() { return this.$store.state.active.project_id }
  },
  data() {
    return {
      loading: true,
      loading_index: false,
      many: [
        
      ],
      items: [
        
      ]
    }
  }
}
</script>

<style lang="sass">
</style>