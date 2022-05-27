<template>
    <div class="card-work">
        <div class="fx-s pb">
            <h6>{{ one.tit }}</h6>
            <ui-table-opera :_mode="3" @view="go('/admin/daily_report/infi_factor/infi_factor_detail')"></ui-table-opera>
        </div>
        <hr/>
        <p class="fx-l fx-t pt_x">
            <span class="w-5em b">报告编号</span>
            <span>{{ one.uid }}</span>
        </p>
        <p class="fx-l fx-t pt">
            <span class="w-5em b">日期</span>
            <span>{{ one.date }}</span>
        </p>
        <p class="fx-l fx-t pt">
            <span class="w-5em b">说明</span>
            <span>{{ one.msg }}</span>
        </p>
        <p class="fx-l fx-t pt">
            <span class="w-5em b">备注</span>
            <span>{{ one.remark }}</span>
        </p>
        <div class="fx-l fx-t pt">
            <div class="w-5em b">附件</div>
            <div>
                <div v-for="(v, i) in one.file" :key="i">
                    <p>{{ v.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ]
}
</script>

<style>

</style>