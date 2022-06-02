<template>
    <div>
        <div class="fx-s">
            <p class="w-48">
                <b>根據圖紙和所提供的資料，審核情況如下：</b><span>{{ one.audit }}</span>
            </p>
            <p class="w-52">
                <b>審核完成日期：</b><span>{{ one.date }}</span>
            </p>
        </div>
        <p>
            <b>負責人簽名：</b><span>{{ one.file_name }}</span><span class="pri px">下載</span>
        </p>
        <p></p>
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
                  audit: '審核中',
                  date: '2022-12-12 12:12',
                  file_name: '簽名001.pdf',
                  link: 'https://www.baidu.com'
              }
          }
      }
  }
}
</script>

<style>

</style>