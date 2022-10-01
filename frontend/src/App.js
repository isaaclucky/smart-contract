import React, { useState, useEffect } from 'react'
import Router from './Router'
// import Register from './Auth/Register';
// import Login from './Auth/Login'
function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("")
  })
  return (
    <React.StrictMode>

      <div>
        <Router />
      </div>

    </React.StrictMode>
  )
}

export default App 