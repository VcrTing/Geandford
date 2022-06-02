<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>代表（承包人名稱）：</b><span>{{ one.company_name }}</span>
            </p>
            <p class="w-31">
                <b>審核經理：</b><span>{{ one.head }}</span>
            </p>
            <p class="w-32">
                <b>遞交方式：</b><span>{{ one.send_way }}</span>
            </p>
        </div>
        <p>
            <b>回復：</b><span>{{ one.replay }}</span>
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
                  company_name: '天國富裕有限公司',
                  head: '劉永', send_way: 'email',
                  replay: '審批通過'
              }
          }
      }
  }
}
</script>

<style>

</style>