<template>
    <div v-if="!load">
        <p>
            <b>需要改正事項：</b>{{ one.correction_item }}
        </p>

        <div class="fx-s">
            <p class="w-37">
                <b>建議：</b>{{ one.suggestion }}
            </p>
            <p class="w-31">
            </p>
            <p class="w-32">
                <b>日期：</b>{{ one.edit_date }}
            </p>
        </div>

        <div class="fx-s">
            <div class="w-37">
                <b>報告者：</b>{{ one.reporter }}
            </div>
            <div class="w-31">
                <b>檢查者：</b>{{ one.reviewer }}
            </div>
            <div class="w-32">
                <b>審核者：</b>{{ one.inspector }}
            </div>
        </div>
    </div>
    <div v-else>
        <p><b>需要改正事項：</b></p>
        <div class="fx-s">
            <p class="w-37"><b>建議：</b>...</p>
            <p class="w-31"></p>
            <p class="w-32"><b>日期：</b>...</p>
        </div>
        <div class="fx-s">
            <div class="w-37"><b>報告者：</b>...</div>
            <div class="w-31"><b>檢查者：</b>...</div>
            <div class="w-32"><b>審核者：</b>...</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        load: { type: Boolean },
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