import Navbar from "./Components/NavBar"
// import Content from "./Components/Content"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FirstPage from "./Components/FirstPage"
import PlanetDetails from "./Components/PlanetDetails"


// We gonna create the different Routes here:
// The main route -> the first page(Mercurty)
// And the other route linked to the others pages -> the others pages (others planets)

// We gonna pass by props the data to the "Content" component and after that we gonna make the different
// modification to do



function App() {
  

  return (
    // <div className="min-h-screen min-w-full bg-black-space ">
    //     {/* <PageStructure /> */}
    //     <Navbar />
    //   <div className="bg-stars">
    //     <div className="text-white">test</div>
    //   </div>
    // </div>
<>
    <Router basename="/planets">
      <div className="min-h-screen min-w-full bg-black-space bg-stars ">
          {/* <PageStructure /> */}
          <Navbar />
          <div className="text-white pt-4">
          {/* <Content /> */}
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
