<template>
    <div>
        <div class="fx-s">
            <p class="w-48">
                根据图纸和所提供的资料，审核情况如下：<span>{{ one.audit }}</span>
            </p>
            <p class="w-52">
                审核完成日期：<span>{{ one.date }}</span>
            </p>
        </div>
        <p>
            负责人签名：<span>{{ one.file_name }}</span><span class="pri px">下载</span>
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
                  audit: '审核中',
                  date: '2022-12-12 12:12',
                  file_name: '签名001.pdf',
                  link: 'https://www.baidu.com'
              }
          }
      }
  }
}
</script>

<style>

</style>