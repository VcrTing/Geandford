
import Home from '@/screen/Home/Home'

import sign from './auth/sign'
import member from './user/member'
import material from './normal/material'
import photo_report from './normal/photo_report'
import repair_defects from './normal/repair_defects'

import table_download from './table/table_download'

import project from './special/project'
import dashboard from './special/dashboard'

const ADMIN_ROOT = '/admin'

const AllRoutes = [
    {
      path: ADMIN_ROOT, component: Home, redirect: ADMIN_ROOT + '/dashboard',
      children: [
        ...member(ADMIN_ROOT + '/member_coopera'),

        ...material(ADMIN_ROOT + '/material'),
        ...photo_report(ADMIN_ROOT + '/photo_report'),
        ...repair_defects(ADMIN_ROOT + '/repair_defects'),

        ...dashboard(ADMIN_ROOT + '/dashboard'),
        ...table_download(ADMIN_ROOT + '/table_download')
      ]
    },
    { path: '', redirect: ADMIN_ROOT, meta: { title: '首页' } },
    ...sign(),
    ...project('/project')
]


export default AllRoutes