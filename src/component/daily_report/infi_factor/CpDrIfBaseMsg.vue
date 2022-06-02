<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>報告編號：</b><span>{{ one.uid }}</span>
            </p>
            <p class="w-31">
                <b>表格類型：</b><span>{{ one.typed }}</span>
            </p>
            <p class="w-32">
                <b>說明：</b><span>{{ one.msg }}</span>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>問題發出部門：</b><span>{{ one.depart }}</span>
            </p>
            <p class="w-31">
                <b>引用編號：</b><span>{{ one.uid_ref }}</span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <p>
            <b>備註：</b><span>{{ one.remark }}</span>
        </p>
    </div>
</template>

<script>
export default {
    props: {
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