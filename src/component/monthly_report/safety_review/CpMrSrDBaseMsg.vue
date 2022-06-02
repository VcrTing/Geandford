<template>
    <div>

        <div class="fx-s">
            <p class="w-37">
                <b>承包商名稱：</b>{{ one.company_name }}
            </p>
            <p class="w-31">
                <b>項目名稱：</b>{{ one.project_name }}
            </p>
            <p class="w-32"></p>
        </div>

        <p>
            <b>參考編號：</b>{{ one.uid }}
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
                    uid: 'ss-0002;user-0001',
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