<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                标题：<span>{{ one.title }}</span>
            </p>
            <p class="w-31">
                日期：<span>{{ one.date }}</span>
            </p>
            <p class="w-32"></p>
        </div>
        <p>
            参考编号：<span>{{ one.uid }}</span>
        </p>
        <p>
            关于上次提交资料的参考编号：<span>{{ one.uid_last }}</span>
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
                  title: '项目2', date: '2022-12-12',
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