import Navbar from "./Components/NavBar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FirstPage from "./Components/FirstPage"
import PlanetDetails from "./Components/PlanetDetails"

function App() {
  
  return (
  <>
    <Router basename="/planets">
      <div className="min-h-screen min-w-full bg-black-space bg-stars ">
          <Navbar />
          <div className="text-white pt-4">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/planet/:name" element={<PlanetDetails />} />
          </Routes>
          </div>
      </div>
    </Router>
  </>
  )
}

export default App
