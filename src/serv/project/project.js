
const get = async function(vue, typed = 'accepted', condition = {}) {
    let res = ''
    if (typed === 'accepted') {
        console.log('PROJECT ACCEPTED')
        res = await vue.net.get('project', vue.net.token(vue), condition, 'accepted')
    } else if (typed === 'invited') {
        res = await vue.net.get('project', vue.net.token(vue), condition, 'invited')
    }

    if (res.statusCode && res.statusCode < 310) { }
    return res.message ? res.message : res
}

const one = async function(vue, pk, condition,) {
    let res = ''
    res = await vue.net.get_one('project', pk, vue.net.token(vue), condition)
    
    if (res.statusCode && res.statusCode < 310) { }
    return res.message ? res.message : res
}

const creat = async function(vue, dt) {
    return // await vue.net.post('order/addr', _token(vue), dt)
}

export default {
    get,
    one,
    creat
}