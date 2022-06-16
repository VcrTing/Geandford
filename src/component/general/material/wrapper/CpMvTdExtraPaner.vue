<template>
    <div>
        <div class="fx-s">
            <p class="w-40">
                <b>總數：</b><span>{{ one.total }}</span>
            </p>
            <p class="w-33">
                <b>未使用：</b><span>{{ one.unused_count }}</span>
            </p>
            <p class="w-27">
                <b>已使用：</b><span>{{ one.consumed_count }}</span>
            </p>
        </div>
        <p><b>損壞：</b><span>{{ one.damaged_count }}</span></p>
        <div class="fx-s">
            <div class="w-40">
                <b>單價：</b><span>{{ one.unit_price }}</span>
            </div>
            <div class="w-33">
                <b>物料總價格：</b><span>{{ one.total_price }}</span>
            </div>
            <div class="w-27">
                <b>損壞總價格：</b><span>{{ one.damaged_price }}</span>
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