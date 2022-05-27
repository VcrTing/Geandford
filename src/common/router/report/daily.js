import daliy_report from '../../../screen/daily_report/daliy_report.vue'
import DrBcd from '../../../screen/daily_report/building_construction_drawing/DrBcd.vue'

import DrBcdTbReview from '../../../screen/daily_report/building_construction_drawing/review/DrBcdTbReview.vue'
import DrBcdAuditReport from '../../../screen/daily_report/building_construction_drawing/audit/DrBcdAuditReport.vue'

import DrRr from '../../../screen/daily_report/report_review/DrRr.vue'
import DrRrDetail from '../../../screen/daily_report/report_review/detail/DrRrDetail.vue'


// 人力
import DrManpower from '../../../screen/daily_report/manpower/DrManpower.vue'
import DrMpDetail from '../../../screen/daily_report/manpower/detail/DrMpDetail.vue'

// 影响因素
import DrIf from '../../../screen/daily_report/infiuence_factor/DrIf.vue'
import DrIfDetail from '../../../screen/daily_report/infiuence_factor/detail/DrIfDetail.vue'

// 安全问题
import DrSp from '../../../screen/daily_report/safety_problem/DrSp.vue'
import DrSpDetail from '../../../screen/daily_report/safety_problem/detail/DrSpDetail.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: daliy_report,
            redirect: head + '/building_construction_drawing',
            children: [
                {
                    path: head + '/building_construction_drawing',
                    component: DrBcd
                },
                {
                    path: head + '/building_construction_drawing' + '/bcd_table_review',
                    component: DrBcdTbReview
                },
                {
                    path: head + '/building_construction_drawing' + '/bcd_audit_report',
                    component: DrBcdAuditReport
                },
                // 
                {
                    path: head + '/man_power',
                    component: DrManpower
                },
                {
                    path: head + '/man_power/man_power_detail',
                    component: DrMpDetail
                },
                //
                {
                    path: head + '/infi_factor',
                    component: DrIf
                },
                {
                    path: head + '/infi_factor/infi_factor_detail',
                    component: DrIfDetail
                },

                //
                {
                    path: head + '/safety_problem',
                    component: DrSp
                },
                {
                    path: head + '/safety_problem/safety_problem_detail',
                    component: DrSpDetail
                }
            ]
        },


        {
            path: head + '/report_review',
            component: DrRr,
        },
        {
            path: head + '/report_review/dr_rr_detail',
            component: DrRrDetail,
        }
    ]
}