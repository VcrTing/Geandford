<template>
    <div>
        <div class="fx-s row">
            <ui-input :is_err="form_err.name" class="w-333 px_s" :header="'项目名称'">
                <input v-model="form.name" class="input w-100" placeholder="输入内容">
            </ui-input>
            <ui-input :is_err="form_err.date" class="w-333 px_s" :header="'发布日期'">
                <time-one class="ip-w-100" :def="'2022-12-12'"></time-one>
            </ui-input>
            <ui-input :is_err="form_err.wear" class="w-333 px_s" :header="'天气'">
                <input v-model="form.wear" class="input w-100" placeholder="输入内容">
            </ui-input>
        </div>
        <div class="py_x">
            <ui-input :is_err="form_err.uid" :header="'参考编号'">
                <input v-model="form.uid" class="input w-100" placeholder="输入编号">
            </ui-input>
        </div>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
  components: { UiInput, TimeOne },
    data() {
        return {
            form: { name: '', date: '12-12 12:12', wear: '', uid: '' },
            form_err: { name: false, date: false, wear: false, uid: false },
        }
    }
}
</script>

<style>

</style>