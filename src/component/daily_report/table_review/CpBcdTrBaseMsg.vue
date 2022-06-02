<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>標題：</b><span>{{ one.title }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p>
            <b>參考編號：</b><span>{{ one.uid }}</span>
        </p>
        <p>
            <b>關於上次提交資料的參考編號：</b><span>{{ one.uid_last }}</span>
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
                  title: '項目2', date: '2022-12-12',
                  uid: 'user-0001;date-2022-12-12',
                  uid_last: 'user-0001;date-2333-23-23'
              }
          }
      }
  }
}
</script>

<style>

</style>