import photo_report from '../../../screen/photo_report/photo_report.vue'
import PhotoReportView from '../../../screen/photo_report/view/PhotoReportView.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: photo_report,
            redirect: head + '/photo_report_view',
            children: [
                {
                    path: head + '/photo_report_view',
                    component: PhotoReportView
                }
            ]
        }
    ]
}