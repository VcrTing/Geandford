
const TEST = true

const baseURL = 'https://strapi02.svr.up5d.com'
// const baseURL = 'http://127.0.0.1:1337'
const API = baseURL // + '/api'

const ENDPOINT = {
  user: '/users',
  project: '/project'
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
