<template>
    <div >
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>公司名稱：</b>
                <span>Jenny Wilson</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>項目名稱：</b>
                <span>Culi Lucy</span>
            </p>
            <p :class="'w-' + wide[2]">
                <b>分別代表：</b>
                <span>Cody Finsher</span>
            </p>
        </div>
        <p class="w-100">
            <b>參考編號：</b>
            <span>manuflls-001;tst-001;</span>
        </p>
        <div class="fx-s">
            <div :class="'w-' + wide[0]">
                <b>類別：</b>
                <span>起重裝置</span>
            </div>
            <div :class="'w-' + wide[1]">
                <b>日期：</b>
                <span>2022-12-12</span>
            </div>
            <div :class="'w-' + wide[2]">
            </div>
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