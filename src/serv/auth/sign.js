
const _in = async function(vue, dt) {
    let user = undefined
    let code = 200
        try {
            const res = await vue.net.auth.login(dt.named, dt.pass)
            code = res.status
            user = res.data.user
            vue.$store.commit('change', [ 'token', res.data.jwt ])
        } catch(err) { code = 400 }
    return [ code, user ]
}

export default {
    _in,
    
}