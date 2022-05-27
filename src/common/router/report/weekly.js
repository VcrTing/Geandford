
import weekly_report from '../../../screen/weekly_report/weekly_report.vue'

import WeeklyReport from '../../../screen/weekly_report/weekly_report/WeeklyReport.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: weekly_report,
            children: [
                {
                    path: head + '/weekly_report_detail',
                    component: WeeklyReport
                },
            ]
        }
    ]
}