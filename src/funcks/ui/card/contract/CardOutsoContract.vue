<template>
    <div class="card-work card-outso-contract">
        <h5 class="pb_s">{{ one.tit }}</h5>
        <hr/>
            <div class="pt_s">
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商名称 </p>
                    <p class="w-56">{{ one.company.name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商负责人 </p>
                    <p class="w-56">{{ one.company.charge }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p class="w-44">承建商联络电话</p>
                    <p class="w-56">{{ one.company.phone }}</p>
                </div>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">预计洽谈合约日期</p>
                <p class="w-56">{{ one.expect_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">预计完成洽谈合约日期</p>
                <p class="w-56">{{ one.finished_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">预计工程开始时间</p>
                <p class="w-56">{{ one.expect_start }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p class="w-44">预计完成时间</p>
                <p class="w-56">{{ one.expected_finish }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <div class="w-44">备注</div>
                <div class="w-56">{{ one.remark }}</div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        one: {
            type: Object,

        }
    }
}
</script>

<style lang="sass" scoped>
</style>