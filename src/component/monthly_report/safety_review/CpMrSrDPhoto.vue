<template>
    <div>
        <h4 class="py">照片</h4>
        <div class="td pl-ip_icon panel-sim py fx-s">
            <div class="w-70">
                {{ one.img }}
            </div>
            <div class="w-30">
                <ui-table-opera :_mode="2"></ui-table-opera>
            </div>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: {
        one: { 
            type: Object,
            default() {
                return {
                    img: '1901 安全现场.jpg'
                }
            }
        }
    }
}
</script>

<style>

</style>