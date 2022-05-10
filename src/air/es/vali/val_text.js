
import val from './_val'

// TRUE 为认证通过

const vid_named = function(src) {
    let res = true
    src = val.empty(src)
    if (!src) { res = false }
    return res
}

const vid_email = function(src) {
    let res = true
    src = val.empty(src)
    if (!src) { res = false }
    src = val.val_email(src)
    if (!src) { res = false }
    return res
}

export default {
    vid_named,
    vid_email
}