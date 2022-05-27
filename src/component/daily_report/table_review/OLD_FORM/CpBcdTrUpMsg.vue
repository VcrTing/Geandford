<template>
    <div class="fx-s fx-t row_x2">
        <div class="w-666">
            <div class="fx-s row_x2">
                <ui-input :is_err="form_err.to" class="w-50 px_s" :header="'致（审核人员）'">
                    <input v-model="form.to" class="input w-100" placeholder="输入内容"/>
                </ui-input>
                <ui-input :is_err="form_err.form" class="w-50 px_s" :header="'来自（审核人员）'">
                    <input v-model="form.form" class="input w-100" placeholder="输入内容"/>
                </ui-input>
            </div>
            <ui-input :is_err="form_err.uid_msg" class="w-100 pt_x" :header="'图纸/材料BQ参考文献编号'">
                <input v-model="form.uid_msg" class="input w-100" placeholder="输入编号"/>
            </ui-input>
            <ui-input :is_err="form_err.approval" class="w-100 py_x" :header="'预计批准日期'">
                <time-one :def="form.approval" class="ip-w-100"></time-one>
            </ui-input>
        </div>
        <ui-input :is_err="form_err.desc" class="w-333 py_x" :header="'图纸/材料说明'">
            <textarea v-model="form.desc" class="input textarea" placeholder="输入编号">
            </textarea>
        </ui-input>
    </div>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
  components: { UiInput, TimeOne },
    data() {
        return {
            form: { to: '', form: '', uid_msg: '', approval: '2022-12-12', desc: '' },
            form_err: { to: false, form: false, uid_msg: false, approval: false, desc: false }
        }
    }

}
</script>

<style lang="sass">

</style>