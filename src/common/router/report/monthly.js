
import monthly_report from '../../../screen/monthly_report/monthly_report.vue'

import MrRr from '../../../screen/monthly_report/report_review/MrRr.vue'
import MrRrDetail from '../../../screen/monthly_report/report_review_detail/MrRrDetail.vue'

// 安全培训
import MrSt from '../../../screen/monthly_report/safety_training/MrSt.vue'
import MrStD from '../../../screen/monthly_report/safety_training/detail/MrStD.vue'

// 安全审查
import MrSr from '../../../screen/monthly_report/safety_review/MrSr.vue'
import MrSrD from '../../../screen/monthly_report/safety_review/detail/MrSrD.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: monthly_report,
            children: [
                {
                    path: head + '/report_review/',
                    component: MrRr
                },
                {
                    path: head + '/report_review/mr_rr_detail/:id',
                    component: MrRrDetail
                },
                
                //
                {
                    path: head + '/safety_training',
                    component: MrSt
                },
                {
                    path: head + '/safety_training/safety_training_detail',
                    component: MrStD
                },

                //
                {
                    path: head + '/safety_review',
                    component: MrSr
                },
                {
                    path: head + '/safety_review/safety_review_detail',
                    component: MrSrD
                }
            ]
        }
    ]
}