<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                致（审核人员）：<span>{{ one.to }}</span>
            </p>
            <p class="w-31">
                来自（审核人员）：<span>{{ one.form }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                图纸/材料BQ参考文献编号：<span>{{ one.number_msg }}</span>
            </p>
            <p class="w-31">
                预计批准日期：<span>{{ one.approve_date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p>
            图纸/材料说明：<span>{{ one.remark }}</span>
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
                  to: '刘样子', form: '王太利',
                  number_msg: 'HGF-3001',
                  approve_date: '2022-12-12 12:12',
                  remark: '审批快一些，谢谢～'
              }
          }
      }
  }
}
</script>

<style>

</style>