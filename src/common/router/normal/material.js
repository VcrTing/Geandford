import MaterialView from '../../../screen/material/view/MaterialView.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: MaterialView
        }
    ]
}