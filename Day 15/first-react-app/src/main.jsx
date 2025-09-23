import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const username = "Pranto Bapary"
function PrantosApp() {
  return (
    <div>
      <h2>Hello {username}</h2>
    </div>
  )
}

// to run it go inside render() method and type PrantosApp()

const anotherElement = (
  <a href="https://github.com/pranto-bapary" target='__blank'>Pranto Bapary</a>
)

// to run it go inside render() method and type just variable name anotherElement

// remember: inside render method only one component can be rendered.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
