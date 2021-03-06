
import conf from '../../conf'

import tool from './_too'
import net from './_api'

import axios from 'axios'

const _net = async function( uri, token, params, method = 'GET', data) {
    return await net({ uri, params, method, data, headers: tool.headers(token) })
}
/*
const get = async function(uri, token, data){    
    const url = conf.API + conf.ENDPOINT[ uri ]
    let res = await axios.get(url, {
        params: data,
        headers: tool.headers(token)
    })
    console.log(url, ' DATA =', data)
    return res
}
*/

const get = async function( uri, token, data, cdt = '' ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + cdt + tool.param( data )
    console.log('GET URL =', url)
    let res = await axios.get(url, { headers: tool.headers(token) })
    return res && res.status == 200 ? res.data : [ ]
}

const get_one = async function( uri, cdt, token, data = {} ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + cdt
    let res = await axios.get(url, { headers: tool.headers(token) })
    return res && res.status == 200 ? res.data : [ ]
}

const post = async function( uri, token, data ) {
    const url = conf.API + conf.ENDPOINT[ uri ]
    let res = await _net(url, token, {}, 'POST', data)
    return res
}
const patch = async function(uri, token, data ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + data.id
    let res = await _net(url, token, {}, 'PATCH', data)
    return res
}


export default {
    get,
    get_one,

    post,
    patch
}