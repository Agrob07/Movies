import "./App.css"
import NavBar from "./components/navigation"
import { routes } from "./routes"
import { useRoutes } from "react-router-dom"

function App() {
  const element = useRoutes(routes)

  return (
    <div className="App w-screen h-screen relative">
      <NavBar />
      <div className="content text-white">{element}</div>
    </div>
  )
}

export default App
