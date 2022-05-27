<template>
    <div>
        <div class="fx-s row_x2">
            <ui-input :is_err="form_err.tit" class="w-333 px_s" :header="'标题'">
                <input v-model="form.tit" class="input w-100" placeholder="输入内容"/>
            </ui-input>
            <ui-input :is_err="form_err.date" class="w-333 px_s" :header="'日期'">
                <input v-model="form.date" class="input w-100" placeholder="输入内容"/>
            </ui-input>
            <div class="w-333"></div>
        </div>
        <ui-input :is_err="form_err.uid" class="w-100 pt_x" :header="'参考编号'">
            <input v-model="form.uid" class="input w-100" placeholder="输入内容"/>
        </ui-input>
        <ui-input :is_err="form_err.uid_old" class="w-100 py_x" :header="'关于上次提交资料的参考编号'">
            <input v-model="form.uid_old" class="input w-100" placeholder="输入内容"/>
        </ui-input>
    </div>
</template>

<script>
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, UiInlineInputFill },
    data() {
        return {
            form: { tit: '', date: '', uid: '', uid_old: '' },
            form_err: { tit: false, date: false, uid: false, uid_old: false }
        }
    }
}
</script>

<style>

</style>