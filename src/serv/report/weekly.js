
const get = async function(vue, uid, condition = { _limit: 200 }) {
    let res = ''
    res = await vue.net.get('weekly', vue.net.token(vue), condition, uid)

    if (res.statusCode && res.statusCode < 310) { }
    return res.message ? res.message : res
}

const one = async function(vue, pk, condition) {
    let res = ''
    res = await vue.net.get_one('weekly', pk, vue.net.token(vue), condition)
    if (res.statusCode && res.statusCode < 310) { }
    return res.message ? res.message : res
}

export default {
    get,
    one,
}