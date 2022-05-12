import Login from '../../../screen/auth/login/Login'
import Register from '../../../screen/auth/login/Register.vue'

export default (head = '') => {
    return [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        }
    ]
}