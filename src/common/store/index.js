import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const check = function(key) {
    let res = sessionStorage.getItem(key)
    console.log('拉取出来的 RES =', res)
    if ((res == undefined) || (res == '') || (res == null) || (res == 'undefined')) {
        return false // 已经存在则为 false
    } else {
        return key // 不存在则为 值
    }
}

export default new Vuex.Store({

    state: {
        token: '',
        loading: false,

        user: {
            id: 1, email: 'support@manfulls.com',
            username: 'strapi-admin', part: '文员',
            avatar: 'https://img2.baidu.com/it/u=3474614069,3903854886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        },
        
        // 激活状态，均为 ID
        active: {
            project_id: 0, // 0 = 没有选取任何项目
        },

        funck: {
            // 0 = 关闭所有 MENU
            // 1 = 打开 主 MENU
            menu: 0,
            // 0 = 关闭 MODAL

            // 1001 = 协作人员的 添加与修改
            // 1010 = 常用表格，1020 = 进度报告, 1030 = 执行报告
            modal_form: 0
        },

        data: {
            
        }
    },
    mutations: {
        change(state, k_v) {
            state[k_v[0]] = k_v[1]
        },
        changeFunck(state, k_v) {
            state.funck[k_v[0]] = k_v[1]
        },
        changeActive(state, k_v) {
            state.active[k_v[0]] = k_v[1]
        }
    },
    getters: { 
        
        checkToken(state) {

            return v => {
              return res
            }
        },
        checkProject(state) {
            const res = sessionStorage.getItem('gendford_project_id')
            console.log('拉取出来的 RES =', res)
            if ((res == undefined) || (res == '') || (res == null) || (res == 'undefined')) {
                return v => { return false }
            }
            
            if (res) { state.active.project_id = res }
            return v => { return res }
        }
    },
    modules: {

    }
})