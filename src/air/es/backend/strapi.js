export default {
    cover: function(one, size = "medium") {
        let res = null

        if (!one.url) { return }

        if (one.formats) {
            res = one.formats[ size ] ? one.formats[ size ] : null
        }

        return res ? res.url : one.url
    }
}