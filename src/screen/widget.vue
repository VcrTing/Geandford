<template>
    <div>
        <div class="panel">
            <p>实时刷新:</p>
            <p>
                项目名称：{{ project.name }}， 项目类型：{{ project.project_type }}，
                <span v-if="project.expected_cost">
                    预计花费：$ {{ project.expected_cost }} HKD
                </span>
            </p>
            <button class="btn-pri py_s px_x2" @click="fresh">手动刷新一次</button>
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
        console.log('一旦刷新，所有 mounted 方法均会重新调用～～')
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