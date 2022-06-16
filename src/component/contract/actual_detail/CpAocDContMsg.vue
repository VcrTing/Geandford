<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>洽談合約日期：</b><span>{{ one.discussion_date }}</span>
            </p>
            <p class="w-31">
                <b>完成洽談合約日期：</b><span>{{ one.discussion_completion_date }}</span>
            </p>
            <p class="w-37"></p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>工程開始時間：</b><span>{{ one.starting_date }}</span>
            </p>
            <p class="w-31">
                <b>完成時間：</b><span>{{ one.finishing_date }}</span>
            </p>
            <p class="w-37"></p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>標預計合約總價：</b><span>{{ one.expected_contract_price }}</span>
            </p>
            <p class="w-31">
                <b>合約總價：</b><span>{{ one.actual_contract_price ? one.actual_contract_price : 0 }}</span>
            </p>
            <p class="w-37">
                <b>實際外判價：</b><span>{{ one.actual_cost ? one.actual_cost : 0 }}</span>
            </p>
        </div>
        <div>
            <b>備註：</b><span>{{ one.remarks ? one.remarks : '(無備註)' }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'one' ]
}
</script>

<style>

</style>