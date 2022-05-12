import repair_defects from '../../../screen/repair_defects/repair_defects.vue'
import RepairDefectsView from '../../../screen/repair_defects/view/RepairDefectsView.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: repair_defects,
            redirect: head + '/repair_defects_view',
            children: [
                {
                    path: head + '/repair_defects_view',
                    component: RepairDefectsView
                }
            ]
        }
    ]
}