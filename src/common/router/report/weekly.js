

import WrWr from '../../../screen/weekly_report/weekly_report/WrWr.vue'
import WrWrD from '../../../screen/weekly_report/weekly_report/detail/WrWrD.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: WrWr,
        },
        {
            path: head + '/weekly_report_detail',
            component: WrWrD
        },
    ]
}