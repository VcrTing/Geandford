const _token = (vue) => vue.$store.state.token

const creat = async function(vue, dt) {
    console.log('ADDR 新增数据 =', dt)
    return Object.assign({ id: 1 }, dt) // await vue.net.post('order/addr', _token(vue), dt)
}
const update = async function(vue, dt) {
    return await vue.net.patch('order/addr', _token(vue), dt)
}
export default {
    creat,
    update
}