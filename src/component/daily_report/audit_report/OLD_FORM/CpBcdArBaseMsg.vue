<template>
    <div>
        <div>
            <p>根据图纸和所提供的资料，审核情况如下</p>
            <nav class="fx-l">
                <ui-radio @tap="form.audit = -1" :active="form.audit == -1">审核中</ui-radio>&nbsp;&nbsp;
                <ui-radio @tap="form.audit = 1" :active="form.audit == 1">通过</ui-radio>&nbsp;&nbsp;
                <ui-radio @tap="form.audit = 0" :active="form.audit == 0">未通过</ui-radio>&nbsp;&nbsp;
            </nav>
        </div>
        <div class="pt_x">
            <p>负责人签名</p>
            <button class="btn-pri-out py_s px_x2">添加签名</button>
        </div>
        <div class="py_x w-50">
            <ui-input :is_err="form_err.finish" :header="'审核完成日期'">
                <time-one :def="form.finish" class="ip-w-100"></time-one>
            </ui-input>
        </div>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import UiRadio from '../../../funcks/ui_element/input/radio/UiRadio.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
  components: { UiRadio, TimeOne, UiInput },
    data() {
        return {
            form: { audit: -1, finish: '2021-12-12' },
            form_err: { audit: false, finish: false }
        }
    }
}
</script>

<style>

</style>