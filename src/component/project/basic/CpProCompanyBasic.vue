<template>
    <div >
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>公司名称：</b>
                <span>Jenny Wilson</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>项目名称：</b>
                <span>Culi Lucy</span>
            </p>
            <p :class="'w-' + wide[2]">
                <b>分别代表：</b>
                <span>Cody Finsher</span>
            </p>
        </div>
        <p class="w-100">
            <b>参考编号：</b>
            <span>manuflls-001;tst-001;</span>
        </p>
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>类别：</b>
                <span>起重装置</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>日期：</b>
                <span>2022-12-12</span>
            </p>
            <p :class="'w-' + wide[2]">
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wide: {
            type: Array,
            default() {
                return [
                    37, 31, 32
                ]
            }
        }
    }
}
</script>

<style>

</style>