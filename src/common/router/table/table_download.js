import table_download from '../../../screen/table_download/table_download.vue'

import TableDownloadOften from '../../../screen/table_download/often/TableDownloadOften.vue'
import TableDownloadPerform from '../../../screen/table_download/perform/TableDownloadPerform.vue'
import TableDownloadProgress from '../../../screen/table_download/progress/TableDownloadProgress.vue'

export default (head) => {
    return [
        
        {
            path: head,
            component: table_download,
            redirect: '/td_often',
            children: [
                {
                    path: head + '/td_often',
                    component: TableDownloadOften
                },
                {
                    path: head + '/td_perform',
                    component: TableDownloadPerform
                },
                {
                    path: head + '/td_progress',
                    component: TableDownloadProgress
                }
            ]
        }
        
    ]
}