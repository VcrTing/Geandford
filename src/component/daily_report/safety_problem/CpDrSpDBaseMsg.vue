<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>事件编号：</b><span>{{ one.uid }}</span>
            </p>
            <p class="w-31">
                <b>说明：</b><span>{{ one.msg }}</span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>相关公司名称：</b><span>{{ one.company_name }}</span>
            </p>
            <p class="w-31">
                <b>日期：</b><span>{{ one.date }}</span>
            </p>
            <p class="w-32">
                <b>问题类型：</b><span>{{ one.typed }}</span>
            </p>
        </div>
        <p>
            <b>事件结束：</b><span>{{ one.is_end }}</span>
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
                    typed: '安全问题', uid: 'so-0001;companu-001',
                    date: '2022-12-12 12:12', msg: '这里是说明这里是说明这里是说明',
                    tip: 'REF', company_name: '盛会指南公司',
                    introduct: '这是安全问题的表格', is_end: true
                }
            }
        }
    }
}
</script>

<style>

</style>