const _COMM = {
    'report_review': '报告预览',
    'weekly_report': '周报表',
    'daily_report': '日报表',
    'monthly_report': '月报表',
}

const _REPORT = {
    // 日
    'man_power': '人力',
    'infi_factor': '影响因素',
    'infi_factor_detail': '详情',
    'building_construction_drawing': '建筑施工图报告',

    'bcd_table_review': '表格预览',
    'bcd_audit_report': '审核报告',

    'dr_rr_detail': '详情',
    'man_power_detail': '详情',

    'safety_problem': '安全问题',
    'safety_problem_detail': '详情',

    // 月
    'mr_rr_detail': '详情',
    'safety_training': '安全培训',
    'safety_training_detail': '详情',
    'safety_review': '安全审查',
    'safety_review_detail': '详情',

    // 星期
    'weekly_report_detail': '详情',
}

const _MEMBER = {
    'member': '成员',
    'member_coopera': '协作人员',
}
const _TIT = {

    'table_download': '表格下载',
    'td_often': '常用表格',
    'td_perform': '执行报告',
    'td_progress': '进度报告',

    'material': '物料',
    'material_view': '物料列表',

    'photo_report': '相片报告',
    'photo_report_review': '报告预览',
    'photo_report_review_detail': '详情',

    'repair_defects': '缺陷整改',
    'repair_defects_view': '整改列表',

    'contract': '施工合约',
    'contracts_view': '合约列表',

    'cost_statistic': '工程支出',
    'expect_outso_contract': '预计外判合约',
    'actual_outso_contract': '实际外判合约',
    'actual_outso_contract_detail': '详情'

}

module.exports = {
    TIT: Object.assign(_TIT, _MEMBER, _REPORT, _COMM)
}