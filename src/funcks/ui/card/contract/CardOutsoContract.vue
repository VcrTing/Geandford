<template>
    <div class="card-work card-outso-contract">
        <h5 class="pb">{{ one.contract_sub_type.name }}</h5>
        <hr/>
            <div class="pt">
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商名稱 </p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商負責人 </p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_contact.name }}</p>
                </div>
                <div class="f-txt-ine py-0">
                    <p :class="'w-' + _wide[0]" class="b">承建商聯絡電話</p>
                    <p :class="'w-' + _wide[1]">{{ one.contractor_contact.phone }}</p>
                </div>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">預計洽談合約日期</p>
                <p :class="'w-' + _wide[1]">{{ one.discussion_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">預計完成洽談合約日期</p>
                <p :class="'w-' + _wide[1]">{{ one.discussion_completion_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">預計工程開始時間</p>
                <p :class="'w-' + _wide[1]">{{ one.starting_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <p :class="'w-' + _wide[0]" class="b">預計完成時間</p>
                <p :class="'w-' + _wide[1]">{{ one.finishing_date }}</p>
            </div>
        <hr/>
            <div class="f-txt-ine">
                <div :class="'w-' + _wide[0]">備註</div>
                <div :class="'w-' + _wide[1]">{{ one.remarks }}</div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        one: { type: Object },
        _wide: {
            type: Array, default() { return [ 45, 55 ] }
        }
    }
}
</script>

<style lang="sass" scoped>
</style>