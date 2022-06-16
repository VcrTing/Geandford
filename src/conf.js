
const TEST = false

const baseURL = 'https://strapi02.svr.up5d.com'
// const baseURL = 'http://127.0.0.1:1337'
const API = baseURL // + '/api'

const ENDPOINT = {
  user: '/users',
  worker: '/worker',
  collab: '/project/get_roles',

  project: '/project',
  pro_expense: '/project/get_expenses',
  // 表格下载
  general_form: '/general_form',
  progress_report: '/progress_report',
  executive_summary: '/executive_summary',

  // 日报表
  daily_report: '/daily_report',
  drawing_form: '/drawing_form',
  drawing_report: '/drawing_report',
  drawing_report_form: '/drawing_form',

  affecting_factor: '/affecting_factor',
  safety_issue: '/safety_issue',
  weekly: '/weekly_report',

  // 月报表
  monthly_report: '/monthly_report',
  safety_review: '/safety_review',
  safety_training: '/safety_training',
 
  // 合约与支出
  tender: '/tender',
  contract: '/contract',
  photo_report: '/photo_report',

  // 物料
  material_cost: '/material_cost',
  material_list: '/material_list' 
}

const STRAPI = {
  named: 'chiuchohin2@gmail.com', // 'support@manfulls.com',
  pass: '1Qazxc2Wsxcv'
}

export default {
  baseURL,
  API,

  TEST,
  STRAPI,
  ENDPOINT,
  
  funcks: require('./funcks/conf_funcks'),
}
