<template>
    <div class="fx-s fx-t row_x2">
        <div class="w-666">
            <div class="fx-s row_x2">
                <ui-input :is_err="form_err.named" class="w-50 px_s" :header="'代表（承包人名称）'">
                    <input v-model="form.named" class="input w-100" placeholder="输入内容"/>
                </ui-input>
                <ui-input :is_err="form_err.manager" class="w-50 px_s" :header="'审核经理'">
                    <input v-model="form.manager" class="input w-100" placeholder="输入内容"/>
                </ui-input>
            </div>
            <ui-input :is_err="form_err.way" class="w-100 pt_x" :header="'递交方式'">
                <vf-send-way-select class="input w-100"></vf-send-way-select>
            </ui-input>
        </div>
        <ui-input :is_err="form_err.reply" class="w-333 py_x" :header="'回复'">
            <textarea v-model="form.reply" class="input textarea" placeholder="输入编号">
            </textarea>
        </ui-input>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfSendWaySelect from '../../../funcks/ui_form/send/ VfSendWaySelect.vue'
export default {
  components: { UiInput, TimeOne, VfSendWaySelect },
    data() {
        return {
            form: { named: '', manager: '', way: '', reply: '' },
            form_err: { named: false, manager: false, way: false, reply: false }
        }
    }

}
</script>

<style lang="sass">
</style>