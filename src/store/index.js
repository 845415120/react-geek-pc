// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
import React from "react"
import LoginStore from "./login.Store"
import UserStore from './user.Store'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()

  }
}
// 导入useStore方法供组件使用数据
const rootStore = new RootStore()
const StoresContext = React.createContext(rootStore)
const useStore = () => React.useContext(StoresContext)
export { useStore }