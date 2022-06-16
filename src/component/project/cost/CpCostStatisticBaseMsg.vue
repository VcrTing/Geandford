<template>
    <div>
        <div class="fx-s">
            <p class="w-37">
                <b>合同期限（/月）：</b><span>{{ one.contract_period }}</span>
            </p>
            <p class="w-31">
                <b>合共總價：</b><span>{{ one.contract_value }}&nbsp;HKD</span>
            </p>
            <p class="w-32">
                <b>每月開支：</b><span>{{ one.regular_expenditure }}&nbsp;HKD</span>
            </p>
        </div>
        <div class="fx-s">
            <div class="w-37">
                <b>預期利潤（%）：</b><span>
                    {{ one.expected_profit }}
                </span>
            </div>
            <div class="w-31">
                <b>工程預計可支出：</b><span>{{ one.expected_cost }}&nbsp;HKD</span>
            </div>
            <div class="w-32">
            </div>
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