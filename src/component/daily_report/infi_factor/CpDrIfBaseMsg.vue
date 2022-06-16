<template>
    <div v-if="!load">
        <div class="fx-s">
            <p class="w-37">
                <b>報告編號：</b><span>{{ one.uid }}</span>
            </p>
            <p class="w-31">
                <b>類型：</b><span>{{ one.type }}</span>
            </p>
            <p class="w-32">
                <b>說明：</b><span>{{ one.description }}</span>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>問題發出部門：</b><span>{{ one.signing_department }}</span>
            </p>
            <p class="w-31">
                <b>引用編號：</b><span>{{ one.reference_number }}</span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <div><b>備註：</b><span>{{ one.remark }}</span></div>
    </div>
    <div v-else>
        <div class="fx-s">
            <p class="w-37"><b>報告編號：</b><span>...</span></p>
            <p class="w-31"><b>類型：</b><span>...</span></p>
            <p class="w-32"><b>說明：</b><span>...</span></p>
        </div>
        <loading :size="0"></loading>
    </div>
</template>

<script>
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
export default {
  components: { Loading },
    props: {
        load: { type: Boolean },
        one: {
            type: Object,
            default() {
                return {
                    typed: '安全問題', uid: 'test-00001;user-000001',
                    date: '2022-12-12 12:12', depart: '部門',
                    tip: 'REF', uid_ref: '000000001',
                    msg: '這是安全問題的表格', remark: '這是安全問題的備註'
                }
            }
        }
    }
}
</script>

<style>

</style>