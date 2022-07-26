
import moment from "moment"

const weeks = [
    '星期壹',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日'
]
const now_timed_list = function() {

    const d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    const year = d.getFullYear()

    return [ year, month, day ]
}
const ser_timed_list = function (e) {

    if (e.length > 10) {
        const year = e.substring(0, 4)
        const month = e.substring(5, 7)
        const day = e.substring(8, 10)
    
        return [ Number.parseInt(year), Number.parseInt(month), Number.parseInt(day) ]
    }
    return [ ]
}

const ser_timed = function(e, mode = 0, long = false, cn = false) {
    e = moment(e)

    if (!cn) {
        if (mode == 1) {
            return long ? e.format('ss:mm:hh DD/MM/yyyy') : e.format('DD/MM/yyyy')
        }
        return long ? e.format('yyyy-MM-DD hh:mm:ss') : e.format('yyyy-MM-DD')
    }
    return long ? e.format('yyyy年MM月DD日 hh時mm分ss秒') : e.format('yyyy年MM月DD日')
}

const ser_minut = function(e, char = '.') {
    e = moment(e)
    return e.format('MM' + char + 'DD')
}

const getToday = function(cn = false, fill = false) {
    const d = new Date()

    const year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()

    if (month < 10 && !fill) { month = '0' + month }
    if (day < 10 && !fill) { day = '0' + day }
    if (cn) { return year + '年' + month + '月' + day + '日' }

    return year + '-' + month + '-' + day
}

const ser_week = function(rec) {
    let res = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'  ]
    return res[rec - 1]
}
const ser_month = function(rec) {
    let res = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    return res[rec]
}

const getTodayEn = function(fill = false, num_month = 0, num_day = 0) {
    const d = new Date()

    const year = d.getFullYear()
    let month = d.getMonth()
    const day = d.getDate()
    const week = d.getDay()
    
    return ser_week(week) + ', ' + ser_month(month) + ' ' + day + ', ' + year
}

const subNow = function(src, mode = 'days') {
    let res = moment(src)
    return res ? res.diff( moment(new Date()), mode ) : 0
}

export default {
    ser_minut,
    ser_timed,

    subNow,
    getToday,
    getTodayEn,

    ser_timed_list,
    now_timed_list,

    now() {
        return moment(new Date()).format('yyyy-MM-DD')
    }
}