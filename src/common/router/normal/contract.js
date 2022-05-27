import contract from '../../../screen/contract/contract.vue'
import ContractView from '../../../screen/contract/view/ContractView.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: contract,
            redirect: head + '/contracts_view',
            children: [
                {
                    path: head + '/contracts_view',
                    component: ContractView
                }
            ]
        }
    ]
}