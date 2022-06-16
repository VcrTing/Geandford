<template>
    <div class="">
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>情況：</b><span>{{ one.item_name }}</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>日期：</b>{{ one.improvement_date }}
            </p>
            <p :class="'w-' + wide[2]">
                <b>負責人：</b>{{ one.person_in_charge }}
            </p>
        </div>
        <div>
            <b>狀況：</b><span>{{ one.completed }}</span>
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
                    item_name: '滿意/沒有明發現',
                    improvement_date: '2022-12-12',
                    person_in_charge: 'Jon Bob',
                    message: '無異常',
                    completed: true
                }
            }
        },
        wide: {
            type: Array,
            default() {
                return [
                    37, 31, 32
                ]
            }
        }
    }
}
</script>

<style>

</style>