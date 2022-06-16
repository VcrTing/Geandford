import sign from "./auth/sign"
import collab from "./member/collab"
import worker from "./member/worker"

import project from "./project/project"
import pro_expense from "./project/pro_expense"

import table_download from "./table/table_download"

import monthly from "./report/monthly"
import weekly from "./report/weekly"
import daily from './report/daily'

import contract from './cost_contract/contract'

import material from './things/material'
import photo_report from './photo/photo_report'

export default {
    sign,
    daily,
    weekly,
    monthly,
    
    project,
    pro_expense,
    
    contract,
    photo_report,

    worker,
    collab,
    
    material,
    table_download
}