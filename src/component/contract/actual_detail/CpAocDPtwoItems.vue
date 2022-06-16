<template>
    <div>
        <h5 class="pb">{{ one.main_type }}</h5>
        <div class="fx-s">
            <p class="w-37">
                <b>材料項目：</b><span>{{ one.material_item }}</span>
            </p>
            <p class="w-31">
                <b>材料類別：</b><span>{{ one.material_type }}</span>
            </p>
            <p class="w-32">
                <b>供應商：</b><span>{{ one.supplier }}</span>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-37">
                <b>品牌樣式：</b><span>{{ one.material_brand }}</span>
            </p>
            <p class="w-31">
                <b>等級：</b><span>Level <span>{{ one.material_level }}</span></span>
            </p>
            <p class="w-32">
            </p>
        </div>
        <div class="fx-s">
            <div class="w-37">
                <b>采購人：</b><span>{{ one.purchased_by }}</span>
            </div>
            <div class="w-31">
                <b>采購人類別：</b><span>{{ one.material_purchaser }}</span>
            </div>
            <div class="w-32">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object
        }
    }
}
</script>

<style>

</style>