
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Editor from '../components/Editor'
import Offlne from '../components/Offlne'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Editor" Component={Editor} />
      <Route path="*" element={<Offlne data={false} />} />
    </Routes>
  )
}
