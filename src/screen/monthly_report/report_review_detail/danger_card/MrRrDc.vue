<template>
    <div class="row_x2 fx-s fx-b">
        <div class="w-333">
            <card-danger-report @detail="$emit('paner', 0)" :name="'accident'" :many="many_danger">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="$emit('paner', 1)" :name="'damage'" :many="many_facility">

            </card-danger-report>
        </div>
        <div class="w-333">
            <card-danger-report @detail="$emit('paner', 2)" :name="'hazardous_incident'" :many="many_damage">
            
            </card-danger-report>
        </div>
    </div>
</template>

<script>
import CardDangerReport from '../../../../funcks/ui/card/danger/CardDangerReport.vue'
export default {
  components: { CardDangerReport },
    props: {
        one: { type: Object }
    },
    computed: {
        many_danger() {
            return [ { txt: '本月累計傷亡人數', num: this.one.accident.injured_this_month }, { txt: '本月累計事故', num: this.one.accident.accident_this_month } ]
        },
        many_facility() {
            return [ { txt: '數量', num: this.one.damage.damage_this_month } ]
        },
        many_damage() {
            return [ { txt: '數量', num: this.one.hazardous_incident.hazardous_incident_this_month } ]
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>