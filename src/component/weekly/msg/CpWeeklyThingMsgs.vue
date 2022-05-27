<template>
    <div class="">
        <div class="fx-s">
            <p :class="'w-' + wide[0]">
                情况：<span>{{ one.situa }}</span>
            </p>
            <p :class="'w-' + wide[1]">
                日期：{{ one.date }}
            </p>
            <p :class="'w-' + wide[2]">
                负责人：{{ one.charge }}
            </p>
        </div>
        <p>
            事情简介：<span>{{ one.message }}</span>
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
                    situa: '满意/没有明发现',
                    date: '2022-12-12',
                    charge: 'Jon Bob',
                    message: '无异常'
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