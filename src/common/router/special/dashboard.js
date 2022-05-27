import Dashboard from '../../../screen/home/dashboard/Dashboard.vue'

import widget from '../../../screen/widget.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: Dashboard,
            children: [
                {
                    path: head + '/widget',
                    component: widget
                }
            ]
        }
    ]
}