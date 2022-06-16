import moment from "moment"

export default {
    sorTime(many, F = false, named = 'date') {
        return many.sort((n, o) => {
            return F ? moment(n[named]) - moment(o[named]) : moment(o[named]) - moment(n[named])
        })
    }
}