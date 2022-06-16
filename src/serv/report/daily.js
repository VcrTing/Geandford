
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
    async drawing_form(vue, uid, cdt) { return await get(vue, 'drawing_form', uid, cdt) },
    async daily_report(vue, uid, cdt) { return await get(vue, 'daily_report', uid, cdt) },

    async drawing_report(vue, uid, cdt) { return await get(vue, 'drawing_report', uid, cdt) },
    async drawing_report_form(vue, uid, cdt) { return await get(vue, 'drawing_report_form', uid, cdt) },

    async safety_issue(vue, uid, cdt) { return await get(vue, 'safety_issue', uid, cdt) },
    async monthly_report(vue, uid, cdt) { return await get(vue, 'monthly_report', uid, cdt) },
    async affecting_factor(vue, uid, cdt) { return await get(vue, 'affecting_factor', uid, cdt) },
}