const _COMM = {
    'report_review': '報告預覽',
    'weekly_report': '周報表',
    'daily_report': '日報表',
    'monthly_report': '月報表',
}

const _REPORT = {
    // 日
    'man_power': '人力',
    'infi_factor': '影響因素',
    'infi_factor_detail': '詳情',
    'building_construction_drawing': '建築施工圖報告',

    'bcd_table_review': '表格預覽',
    'bcd_audit_report': '審核報告',

    'dr_rr_detail': '詳情',
    'man_power_detail': '詳情',

    'safety_problem': '安全問題',
    'safety_problem_detail': '詳情',

    // 月
    'mr_rr_detail': '詳情',
    'safety_training': '安全培訓',
    'safety_training_detail': '詳情',
    'safety_review': '安全審查',
    'safety_review_detail': '詳情',

    // 星期
    'weekly_report_detail': '詳情',
}

const _MEMBER = {
    'member': '成員',
    'member_coopera': '協作人員',
}
const _TIT = {

    'table_download': '表格下載',
    'td_often': '常用表格',
    'td_perform': '執行報告',
    'td_progress': '進度報告',

    'material': '物料',
    'material_view': '物料列表',

    'photo_report': '相片報告',
    'photo_report_review': '報告預覽',
    'photo_report_review_detail': '詳情',

    'repair_defects': '缺陷整改',
    'repair_defects_view': '整改列表',

    'contract': '施工合約',
    'contracts_view': '合約列表',

    'cost_statistic': '工程支出',
    'expect_outso_contract': '預計外判合約',
    'actual_outso_contract': '實際外判合約',
    'actual_outso_contract_detail': '詳情'

}

module.exports = {
    TIT: Object.assign(_TIT, _MEMBER, _REPORT, _COMM)
}