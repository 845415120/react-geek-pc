// 引入ant
import React from 'react'

// 导入路由
import { BrowserRouter, Route, Routes } from "react-router-dom"
// 鉴权
import { AuthRoute } from '@/components/AuthRoute'
// 导入页面
import Login from "./pages/Login"
import Layout from "./pages/Layout"
import Article from "./pages/Article"
import Home from "./pages/Home"
import Publish from "./pages/Publish"
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
            </AuthRoute>
          }>
            {/* 二级路由默认页面 */}
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </div >
    </BrowserRouter>
  )
}

export default App
