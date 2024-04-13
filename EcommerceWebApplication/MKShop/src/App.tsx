import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      <Navbar />
      <section className="flex flex-column justify-center  h-[calc(100vh-50px)] bg-[#ff407d]">
        <div className="flex flex-start my-20">
          <h1 className="font-sans italic text-5xl text-white">
            "From Tech to Trends, Everything at Your Fingertips!"</h1>
        </div>
        <div></div>
        <div></div>
      </section>
    </>
  )
}

export default App
