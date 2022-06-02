<template>
    <div class="">
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                <b>情況：</b><span>{{ one.situa }}</span>
            </p>
            <p :class="'w-' + wide[1]">
                <b>日期：</b>{{ one.date }}
            </p>
            <p :class="'w-' + wide[2]">
                <b>負責人：</b>{{ one.charge }}
            </p>
        </div>
        <p>
            <b>事情簡介：</b><span>{{ one.message }}</span>
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
                    situa: '滿意/沒有明發現',
                    date: '2022-12-12',
                    charge: 'Jon Bob',
                    message: '無異常'
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