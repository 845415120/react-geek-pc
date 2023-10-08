// 登录模块
// 基于mobx封装管理用户登录的store
import { makeAutoObservable } from 'mobx'
import { setToken, getToken, clearToken, http } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }
  // 登录
  getToken = async ({ mobile, code }) => {
    // 调用登录接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile, code
    })
    // 存入token
    this.token = res.data.token
    setToken(res.data.token)
  }
}
export default LoginStore