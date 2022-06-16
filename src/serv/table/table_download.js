
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
    async general_form(vue, uid, cdt) { return await get(vue, 'general_form', uid, cdt) },

    async progress_report(vue, uid, cdt) { return await get(vue, 'progress_report', uid, cdt) },
    
    async perform_report(vue, uid, cdt) { return await get(vue, 'executive_summary', uid, cdt) },
}