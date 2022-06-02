<template>
    <div>
        <p>
            <b>需要改正事項：</b>{{ one.change_thing }}
        </p>

        <div class="fx-s">
            <p class="w-37">
                <b>建議：</b>{{ one.advice }}
            </p>
            <p class="w-31">
            </p>
            <p class="w-32">
                <b>日期：</b>{{ one.date }}
            </p>
        </div>

        <div class="fx-s">
            <p class="w-37">
                <b>報告者：</b>{{ one.who_report }}
            </p>
            <p class="w-31">
                <b>檢查者：</b>{{ one.who_check }}
            </p>
            <p class="w-32">
                <b>審核者：</b>{{ one.who_audit }}
            </p>
        </div>
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
                    date: '2022-12-12',
                    change_thing: '很棒的工程項目',
                    advice: '戴安全帽',
                    who_audit: 'eric',
                    who_report: 'eric',
                    who_check: 'eric'
                }
            }
        }
    }
}
</script>

<style>

</style>