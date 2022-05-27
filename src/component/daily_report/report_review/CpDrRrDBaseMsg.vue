<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                项目名称：<span>{{ one.name }}</span>
            </p>
            <p class="w-31">
                日期：<span>{{ one.date }}</span>
            </p>
            <p class="w-32">
                天气：<span>{{ one.wearth }}</span>
            </p>
        </div>
        <p>
            参考编号：<span>{{ one.uid }}</span>
        </p>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
  components: { UiInput, TimeOne },
  props: {
      one: {
          type: Object,
          default() {
              return {
                  name: '项目2', date: '2022-12-12 12:12',
                  wearth: '下雨', uid: 'test-00001;project-0001'
              }
          }
      }
  }
}
</script>

<style>

</style>