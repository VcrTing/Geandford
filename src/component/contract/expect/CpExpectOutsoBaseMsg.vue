<template>
    <div>
        <div class="fx-s">
            <div class="w-37">
                <b>項目名稱：</b><span>{{ pro.name }}</span>
            </div>
            <div class="w-31">
                <b>合約編號：</b><span>{{ pro.uid }}</span>
            </div>
            <div class="w-32">
                <b>工程預計可支出：</b><span>{{ pro.expected_cost }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        pro() { return this.$store.state.project },
    },
    mounted() {
        console.log('PRO =', this.pro)
    },
}
</script>

<style>

</style>