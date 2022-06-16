<template>
    <div class="card-work">
        <div class="fx-s pb">
            <h6 class="t-cap">{{ tit }}</h6>
            <ui-table-opera :_mode="3" @view="go('/admin/daily_report/infi_factor/infi_factor_detail?id=' + one.uid)"></ui-table-opera>
        </div>
        <hr/>
        <p class="fx-l fx-t pt_x">
            <span class="w-5em b">報告編號</span>
            <span>{{ one.uid }}</span>
        </p>
        <p class="fx-l fx-t pt">
            <span class="w-5em b">日期</span>
            <span>{{ one.date }}</span>
        </p>
        <!--p class="fx-l fx-t pt">
            <span class="w-5em b">部門</span>
            <span>{{ one.signing_department }}</span>
        </p-->
        <p class="fx-l fx-t pt">
            <span class="w-5em b">說明</span>
            <span>{{ one.description }}</span>
        </p>
        <p class="fx-l fx-t pt">
            <span class="w-5em b">備註</span>
            <span>{{ one.remark }}</span>
        </p>
        <div class="fx-l fx-t pt">
            <div class="w-5em b">附件</div>
            <div>
                <div v-for="(v, i) in one.attachment" :key="i">
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
    props: [ 'one' ],
    computed: {
        tit() {
            let res = this.one.type
            return res ? res.replace('_', ' ').replace('-', ' ') : '（無標題）'
        }
    }
}
</script>

<style>

</style>