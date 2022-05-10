const _token = (vue) => vue.$store.state.token

const get = async function(vue, condition = {}) {
    let res = ''
    res = await vue.net.get('project', _token(vue), condition)
    return res
}

const creat = async function(vue, dt) {
    return // await vue.net.post('order/addr', _token(vue), dt)
}

export default {
    get,
    creat
}