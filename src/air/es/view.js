import sort from './backend/sort'

import timed from './timed/ser_timed'
import float from './num/float'
import strapi from './backend/strapi'

const first_Max = function(rec) {
    return rec.slice(0, 1).toUpperCase() + rec.slice(1)
}

export default {
    timed,
    now: timed.now,
    ser_timed: timed.ser_timed,

    sort,
    float,
    strapi,

    //
    set_ss(k, v) {
        sessionStorage.setItem(k, JSON.stringify(v))
    },
    get_ss(k) {
        k = sessionStorage.getItem(k)
        return k ? JSON.parse(k) : null
    },

    usedobj(src) {
        const res = { }
        for(let k in src) {
            if (src[k] == '' || src[k] == null) { } else {
                res[ k ] = src[ k ]
            }
        }
        return res
    }
}