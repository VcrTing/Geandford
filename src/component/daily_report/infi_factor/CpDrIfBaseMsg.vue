<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                报告编号：<span>{{ one.uid }}</span>
            </p>
            <p class="w-31">
                表格类型：<span>{{ one.typed }}</span>
            </p>
            <p class="w-32">
                说明：<span>{{ one.msg }}</span>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                问题发出部门：<span>{{ one.depart }}</span>
            </p>
            <p class="w-31">
                引用编号：<span>{{ one.uid_ref }}</span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <p>
            备注：<span>{{ one.remark }}</span>
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
                    typed: '安全问题', uid: 'test-00001;user-000001',
                    date: '2022-12-12 12:12', depart: '部门',
                    tip: 'REF', uid_ref: '000000001',
                    msg: '这是安全问题的表格', remark: '这是安全问题的备注'
                }
            }
        }
    }
}
</script>

<style>

</style>