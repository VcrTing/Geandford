<template>
    <div class="row_x2 fx-s fx-b">
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'傷害報告'" :many="many_danger">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'第三方財產和公用設施損壞報告'" :many="many_facility">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="openDetail" :head="'傷害報告'" :many="many_damage">
            
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
                { txt: '本月累計傷亡人數', num: 0 },
                { txt: '本月累計事故', num: 4 }
            ],
            many_facility: [
                { txt: '數量', num: 4 },
            ],
            many_damage: [
                { txt: '數量', num: 1 },
            ],
        }
    }
}
</script>

<style>

</style>