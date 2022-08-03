<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>項目名稱：</b><span v-if="one.project">{{ one.project.name }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.date }}</span>
            </p>
            <p class="w-32">
                <b>天氣：</b><span>{{ one.weather }}</span>
            </p>
        </div>
        <div>
            <b>參考編號：</b><span>{{ one.uid }}</span>
        </div>
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
                  name: '項目2', date: '2022-12-12 12:12',
                  wearth: '下雨', uid: 'test-00001;project-0001'
              }
          }
      }
  }
}
</script>

<style>

</style>