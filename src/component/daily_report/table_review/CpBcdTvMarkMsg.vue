<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                代表（承包人名称）：<span>{{ one.company_name }}</span>
            </p>
            <p class="w-31">
                审核经理：<span>{{ one.head }}</span>
            </p>
            <p class="w-32">
                递交方式：<span>{{ one.send_way }}</span>
            </p>
        </div>
        <p>
            回复：<span>{{ one.replay }}</span>
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
                  company_name: '天国富裕有限公司',
                  head: '刘永', send_way: 'email',
                  replay: '审批通过'
              }
          }
      }
  }
}
</script>

<style>

</style>