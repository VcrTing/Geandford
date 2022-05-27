<template>
    <div>
        <p>
            需要改正事项：{{ one.change_thing }}
        </p>

        <div class="fx-s">
            <p class="w-37">
                建议：{{ one.advice }}
            </p>
            <p class="w-31">
            </p>
            <p class="w-32">
                日期：{{ one.date }}
            </p>
        </div>

        <div class="fx-s">
            <p class="w-37">
                报告者：{{ one.who_report }}
            </p>
            <p class="w-31">
                检查者：{{ one.who_check }}
            </p>
            <p class="w-32">
                审核者：{{ one.who_audit }}
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
                    change_thing: '很棒的工程项目',
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