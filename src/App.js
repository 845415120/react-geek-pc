// 引入ant
import React from 'react'

// 导入路由
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
// 鉴权
import { AuthRoute } from '@/components/AuthRoute'
// 导入页面
import Login from "./pages/Login"
import Layout from "./pages/Layout"

// 配置路由规则
function App () {
  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route path="/" element={
            <AuthRoute>
              <Layout />
            </AuthRoute>}></Route>
          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div >
    </BrowserRouter>
  )
}

export default App
