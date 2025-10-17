import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Github, { githubLoader } from './pages/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Layout}>
      <Route index Component={Home} />
      <Route path='about' Component={About} />
      <Route path='contact' Component={Contact} />
      <Route path='github' loader={githubLoader} Component={Github} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
