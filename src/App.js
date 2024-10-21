import React, { lazy, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { themeChange } from 'theme-change';
import './App.css';
import initializeApp from './app/init';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))

// Initializing different libraries
initializeApp()


// Check for login and initialize axios
// const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
          
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          {/* <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />}/> */}
          <Route path="*" element={<Navigate to="/app/menus" replace />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
