<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <p class="w-48">
                <b>根據圖紙和所提供的資料，審核情況如下：</b><span>{{ one.status }}</span>
            </p>
            <p class="w-52">
                <b>審核完成日期：</b><span>{{ one.comment_date }}</span>
            </p>
        </div>
        <div class="fx-l fx-t">
            <div class="b">負責人簽名：</div>
            <div class="fx-1 pl" v-if="signs">
                <div v-for="(v, i) in signs" :key="i">
                    <span>{{ v.name }} ({{ v.mime }})</span>&nbsp;&nbsp;<a class="pri" :href="conf.baseURL + v.url">下載</a>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-48"><b>根據圖紙和所提供的資料，審核情況如下：</b></p>
            <p class="w-52"><b>審核完成日期：</b></p>
        </div>
        <loading :size="0"></loading>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
  props: {
      ioad: { type: Boolean },
      one: {
          type: Object
      }
  },
  computed: {
      signs() {
          return this.one.review_signature
      }
  }
}
</script>

<style>

</style>