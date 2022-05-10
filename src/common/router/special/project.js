import project from '../../../screen/project/project.vue'

import ProjectChoise from '../../../screen/project/choise/ProjectChoise.vue'

export default (head = '') => {
    return [
        {
            path: head,
            redirect: head + '/choise',
            component: project,
            children: [
                {
                    path: head + '/choise',
                    component: ProjectChoise
                }
            ]
        }
    ]
}