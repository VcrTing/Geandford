<template>
    <div>
        <h4 class="pb">照片</h4>
        <div class="td-iin">
            <div class="w-90">
                {{ one.img }}
            </div>
            <div class="w-10">
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
                    img: '1901 安全現場.jpg'
                }
            }
        }
    }
}
</script>

<style>

</style>