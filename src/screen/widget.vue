<template>
    <div>
        <div class="panel">
            <p>實時刷新:</p>
            <p>
                項目名稱：{{ project.name }}， 項目類型：{{ project.project_type }}，
                <span v-if="project.expected_cost">
                    預計花費：$ {{ project.expected_cost }} HKD
                </span>
            </p>
            <button class="btn-pri py_s px_x2" @click="fresh">手動刷新壹次</button>
        </div>

        <div class="fx-s">
            <div class="w-50">
                <card-construction-work></card-construction-work>
            </div>
            <div class="w-50">
                <card-factor-influe></card-factor-influe>
            </div>
        </div>
        <div class="fx-s">
            <div class="w-50">
                <card-danger-report></card-danger-report>
            </div>
            <div class="w-50">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CardConstructionWork from '../funcks/ui/card/construction/CardConstructionWork.vue'
import CardDangerReport from '../funcks/ui/card/danger/CardDangerReport.vue'
import CardFactorInflue from '../funcks/ui/card/factor/CardFactorInflue.vue'

export default {
    inject: [ 'refresh' ],
  components: { CardConstructionWork, CardFactorInflue, CardDangerReport },
    mounted() {
        console.log('壹旦刷新，所有 mounted 方法均會重新調用～～')
    },
    computed: {
        project() { return this.$store.state.project }
    },
    methods: {
        fresh() { this.refresh() }
    }
}
</script>

<style>

</style>