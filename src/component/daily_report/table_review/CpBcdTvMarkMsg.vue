<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <p class="w-37">
                <b>代表（承包人名稱）：</b><span>{{ item.representative }}</span>
            </p>
            <p class="w-31">
                <b>審核經理：</b><span>{{ item.project_manager }}</span>
            </p>
            <p class="w-32">
                <b>遞交方式：</b><span>{{ item.submit_method }}</span>
            </p>
        </div>
        <div>
            <b>回復：</b><span>{{ item.reply }}</span>
        </div>
    </div>
    <loading v-else :size="0"></loading>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading  },
  props: {
      ioad: {
          type: Boolean
      },
      one: {
          type: Object,
      }
  },
  computed: {
      item() {
          return this.one.submission_detail
      }
  }
}
</script>

<style>

</style>