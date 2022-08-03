
const mistake = function(res) {
    if (res.statusCode && res.statusCode < 310) { }
    return res.message ? res.message : res
}

const get = async function(vue, edpt, uid, condition = { _limit: 300 }) {
    let res = ''
    res = await vue.net.get(edpt, vue.net.token(vue), condition, uid)

    return mistake(res)
}

export default {
    async many(vue, uid, cdt) { return await get(vue, 'photo_report', 'project/' + uid, cdt) },
    async one(vue, uid, cdt) { return await get(vue, 'photo_report', uid, cdt) },
}
