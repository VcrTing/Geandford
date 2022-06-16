import cost_statistic from '../../../screen/project/cost_statistic/cost_statistic.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: cost_statistic
        }
    ]
}