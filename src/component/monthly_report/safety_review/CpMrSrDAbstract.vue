<template>
    <div>
        <p>
            <b>報告摘要：</b>{{ one.report_abstract }}
        </p>

        <div class="fx-l fx-t">
            <div class="b">安全計劃審查：</div>
            <div class="fx-1">
                <!--div class="pb_s" v-for="(v, i) in one.plans" :key="i">
                    {{ v.name }}
                </div-->
                <span>{{ one.safety_plan_inspection }}</span>
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