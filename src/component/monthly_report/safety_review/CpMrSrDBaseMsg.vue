<template>
    <div>

        <div class="fx-s">
            <p class="w-37">
                承包商名称：{{ one.company_name }}
            </p>
            <p class="w-31">
                项目名称：{{ one.project_name }}
            </p>
            <p class="w-32"></p>
        </div>

        <p>
            参考编号：{{ one.uid }}
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
                    project_name: '很棒的工程项目'
                }
            }
        }
    }
}
</script>

<style>

</style>