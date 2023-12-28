import Navbar from "./Components/NavBar"
import Content from "./Components/Content"

function App() {
  

  return (
    // <div className="min-h-screen min-w-full bg-black-space ">
    //     {/* <PageStructure /> */}
    //     <Navbar />
    //   <div className="bg-stars">
    //     <div className="text-white">test</div>
    //   </div>
    // </div>

    <div className="min-h-screen min-w-full bg-black-space bg-stars ">
        {/* <PageStructure /> */}
        <Navbar />
        <div className="text-white pt-4">
         <Content />
        </div>
    </div>
  )
}

export default App
