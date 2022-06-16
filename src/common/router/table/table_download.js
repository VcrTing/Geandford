import table_download from '../../../screen/table_download/table_download.vue'

import TdOften from '../../../screen/table_download/often/TdOften.vue'
import TdProg from '../../../screen/table_download/progress/TdProg.vue'
import TdPerf from '../../../screen/table_download/perform/TdPerf.vue'

import TdOfDetail from '../../../screen/table_download/often/detail/TdOfDetail.vue'
import TdPfDetail from '../../../screen/table_download/perform/detail/TdPfDetail.vue'
import TdPgDetail from '../../../screen/table_download/progress/detail/TdPgDetail.vue'

export default (head) => {
    return [
        {
            path: head,
            redirect: head + '/often',
            component: table_download,
            children: [
                {
                    path: head + '/often',
                    component: TdOften,
                },
                {
                    path: head + '/often/often_detail',
                    component: TdOfDetail,
                },

                {
                    path: head + '/progress',
                    component: TdProg,
                },
                {
                    path: head + '/often/progress_detail',
                    component: TdPgDetail,
                },

                {
                    path: head + '/perform',
                    component: TdPerf,
                },
                {
                    path: head + '/perform/perform_detail',
                    component: TdPfDetail,
                },
            ]
        }
        
    ]
}