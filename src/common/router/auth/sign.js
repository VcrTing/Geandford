import Login from '../../../screen/auth/login/Login'

export default (head = '') => {
    return [
        {
            path: '/login',
            component: Login,
        }
    ]
}