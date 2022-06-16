<template>
    <div v-if="!ioad">
        <div class="fx-s">
            <p class="w-37">
                <b>致（審核人員）：</b><span><span class="t-cap">{{ item.to }}</span>&nbsp;{{ item.to_pronoun }}</span>
            </p>
            <p class="w-31">
                <b>來自（審核人員）：</b><span>{{ item.form }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>圖紙/材料BQ參考文獻編號：</b><span>{{ item.drawing_BQ_reference }}</span>
            </p>
            <p class="w-31">
                <b>預計批準日期：</b><span>{{ item.expected_approval_date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <div>
            <b>圖紙/材料說明：</b><span>{{ item.drawing_description }}</span>
        </div>
    </div>
    <loading v-else :size="0"></loading>
</template>

<script>
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { UiInput, UiInlineInputFill, Loading },
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