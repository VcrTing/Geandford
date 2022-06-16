
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
    async safety_review(vue, uid, cdt) { return await get(vue, 'safety_review', uid, cdt) },
    async safety_training(vue, uid, cdt) { return await get(vue, 'safety_training', uid, cdt) },
    
    async monthly_report(vue, uid, cdt) { return await get(vue, 'monthly_report', uid, cdt) },
}