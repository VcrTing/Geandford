
import Home from '@/screen/Home/Home'

import sign from './auth/sign'
import member from './user/member'

import table_download from './table/table_download'

import project from './special/project'
import dashboard from './special/dashboard'

const ADMIN_ROOT = '/admin'

const AllRoutes = [
    {
      path: ADMIN_ROOT, component: Home, redirect: ADMIN_ROOT + '/dashboard',
      children: [
        ...member(ADMIN_ROOT + '/member_coopera'),
        
        ...dashboard(ADMIN_ROOT + '/dashboard'),
        ...table_download(ADMIN_ROOT + '/table_download')
      ]
    },
    { path: '', redirect: ADMIN_ROOT, meta: { title: '首页' } },
    ...sign(),
    ...project('/project')
]


export default AllRoutes