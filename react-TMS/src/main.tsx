import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import { About } from './pages/About.tsx'
import { Users } from './pages/Users.tsx'
import { Home } from './pages/Home.tsx'
import { UserContextProvider } from './contexts/UserContext.tsx'
import { Error } from './pages/Error.tsx'
import { Login } from './pages/Login.tsx'
import { User } from './pages/User.tsx'
import { Provider } from 'react-redux'
import {store} from './lib/store.ts'
import { Posts } from './pages/Posts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserContextProvider><Home /></UserContextProvider>} />
          <Route path='/about' element={<UserContextProvider><About /></UserContextProvider>} />
          <Route path='/users' element={<UserContextProvider><Users /></UserContextProvider>}>
          </Route>
            <Route path='/users/:userId' element={<UserContextProvider><User /></UserContextProvider>} />
          <Route path='/login' element={<UserContextProvider><Login /></UserContextProvider>} />
          <Route path='/posts' element={<UserContextProvider><Posts /></UserContextProvider>} />
          <Route path='*' element={<UserContextProvider><Error /></UserContextProvider>} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </StrictMode>,
)
