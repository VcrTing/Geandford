<template>
    <div class="row_x2 fx-s fx-b">
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'伤害报告'" :many="many_danger">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'第三方财产和公用设施损坏报告'" :many="many_facility">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'伤害报告'" :many="many_damage">
            
            </card-danger-report>
        </div>
    </div>
</template>

<script>
import CardDangerReport from '../../../../funcks/ui/card/danger/CardDangerReport.vue'
export default {
  components: { CardDangerReport },
    data() {
        return {
            many_danger: [
                { txt: '本月累计伤亡人数', num: 0 },
                { txt: '本月累计事故', num: 4 }
            ],
            many_facility: [
                { txt: '数量', num: 4 },
            ],
            many_damage: [
                { txt: '数量', num: 1 },
            ],
        }
    }
}
</script>

<style>

</style>