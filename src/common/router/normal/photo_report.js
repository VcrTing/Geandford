import photo_report from '../../../screen/photo_report/photo_report.vue'

import PrRr from '../../../screen/photo_report/report_review/PrRr.vue'
import PrRrD from '../../../screen/photo_report/report_review/detail/PrRrD.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: photo_report,
            redirect: head + '/photo_report_review',
            children: [
                {
                    path: head + '/photo_report_review',
                    component: PrRr
                },
                {
                    path: head + '/photo_report_review/photo_report_review_detail',
                    component: PrRrD
                }
            ]
        }
    ]
}