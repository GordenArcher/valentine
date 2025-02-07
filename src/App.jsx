import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Ask } from './pages/Ask'
import NotFound from './pages/404'
import Last from './pages/last'
import { ToastContainer, Slide } from 'react-toastify'
import { useEffect, useState } from 'react'

function App() {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    if(userName){
      localStorage.setItem("name", userName)
    }
  })

  return (
    <>
      <Routes>
        {userName && (
          <>
            <Route path='/ask' element={ <Ask />} />
            <Route path='/last' element={ <Last />} />
          </>
        )}
        <Route path='/' element={ <Main userName={userName} setUserName={setUserName} />} /> 
        <Route path='*' element={ <NotFound />} />
      </Routes>


      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
/>
    </>
  )
}

export default App
