
const _in = async function(vue, dt) {
    let user = undefined
    let code = 200
        try {
            const res = await vue.net.auth.login(dt.named, dt.pass)
            code = res.status
            user = Object.assign({
                part: '管理員', 
                avatar: 'https://img2.baidu.com/it/u=3474614069,3903854886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
            }, res.data.user)
            vue.$store.commit('change', [ 'user', user ])
            vue.$store.commit('change', [ 'token', res.data.jwt ])
        } catch(err) { code = 400 }
    return [ code, user ]
}

export default {
    _in,
    
}