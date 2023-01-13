import React, { Suspense } from "react"

// ** Router Import
import Router from "./router/Router"
import Login from '../src/pages/Login'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
      {/* <Login/> */}
    </Suspense>
    // <Login/>
  )
}

export default App
