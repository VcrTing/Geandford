<template>
    <div>
        <p>
            报告摘要：{{ one.abstract }}
        </p>

        <div class="fx-l fx-t">
            <p>安全计划审查：</p>
            <div class="fx-1">
                <div class="pb_s" v-for="(v, i) in one.plans" :key="i">
                    {{ v.name }}
                </div>
            </div>
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
                    abstract: 'Wade NameWade Name Wade NameWade Name',
                    plans: [
                        {
                            name: 'O Wade NameWade Name'
                        },
                        {
                            name: 'E Wade NameWade Name'
                        },
                        {
                            name: 'C Wade NameWade Name'
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style>

</style>