
import Home from '@/screen/Home/Home'

import sign from './auth/sign'
import member from './user/member'

import material from './normal/material'
import photo_report from './normal/photo_report'
import repair_defects from './normal/repair_defects'
import contract from './normal/contract'

import table_download from './table/table_download'

import project from './special/project'
import dashboard from './special/dashboard'

// 日报表
import daily from './report/daily'
import monthly from './report/monthly'
import weekly from './report/weekly'

const ADMIN_ROOT = '/admin'

const AllRoutes = [
    {
      path: ADMIN_ROOT, component: Home, redirect: ADMIN_ROOT + '/dashboard',
      children: [
        ...daily(ADMIN_ROOT + '/daily_report'),
        ...weekly(ADMIN_ROOT + '/weekly_report'),
        ...monthly(ADMIN_ROOT + '/monthly_report'),
        
        ...member(ADMIN_ROOT + '/member_coopera'),

        ...contract(ADMIN_ROOT + '/contract'),
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