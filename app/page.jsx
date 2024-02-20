"use client"
// ** MUI Imports
import dynamic from "next/dynamic"
const LoginPage = dynamic(()=>import("./login/page"))
const Dashboard = () => {
  return (
    <LoginPage/>
  )
}

export default Dashboard
