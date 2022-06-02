<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>致（審核人員）：</b><span>{{ one.to }}</span>
            </p>
            <p class="w-31">
                <b>來自（審核人員）：</b><span>{{ one.form }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>圖紙/材料BQ參考文獻編號：</b><span>{{ one.number_msg }}</span>
            </p>
            <p class="w-31">
                <b>預計批準日期：</b><span>{{ one.approve_date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p>
            <b>圖紙/材料說明：</b><span>{{ one.remark }}</span>
        </p>
    </div>
</template>

<script>
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, UiInlineInputFill },
  props: {
      one: {
          type: Object,
          default() {
              return {
                  to: '劉樣子', form: '王太利',
                  number_msg: 'HGF-3001',
                  approve_date: '2022-12-12 12:12',
                  remark: '審批快壹些，謝謝～'
              }
          }
      }
  }
}
</script>

<style>

</style>