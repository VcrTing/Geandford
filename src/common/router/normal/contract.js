import contract from '../../../screen/contract/contract.vue'
import expect_outso_contract from '../../../screen/contract/expect_outso_contract/expect_outso_contract.vue'
import actual_outso_contract from '../../../screen/contract/actual_outso_contract/actual_outso_contract.vue'

import AocD from '../../../screen/contract/actual_outso_contract/detail/AocD.vue'
export default (head = '') => {
    return [
        {
            path: head,
            component: contract,
            redirect: head + '/expect_outso_contract',
            children: [
                {
                    path: head + '/expect_outso_contract',
                    component: expect_outso_contract
                },
                {
                    path: head + '/actual_outso_contract',
                    component: actual_outso_contract
                },
                {
                    path: head + '/actual_outso_contract/actual_outso_contract_detail',
                    component: AocD
                }
            ]
        }
    ]
}