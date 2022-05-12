import material from '../../../screen/material/material.vue'
import MaterialView from '../../../screen/material/view/MaterialView.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: material,
            redirect: head + '/material_view',
            children: [
                {
                    path: head + '/material_view',
                    component: MaterialView
                }
            ]
        }
    ]
}