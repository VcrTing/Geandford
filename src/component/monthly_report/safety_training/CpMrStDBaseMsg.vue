<template>
    <div class="fx-s">
        <p class="w-37">
            <b>承包商名稱：</b>{{ one.company_name }}
        </p>
        <p class="w-31">
            <b>項目名稱：</b>{{ one.project_name }}
        </p>
        <p class="w-32"></p>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,
            default() {
                return {
                    company_name: 'Wade Name',
                    project_name: '很棒的工程項目'
                }
            }
        }
    }
}
</script>

<style>

</style>