import React from "react"
import Navbar from "./Components/NavBar"
import BooksTable from "./Components/BooksTable"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <BooksTable />
      <Footer />
    </div>
  )
}

export default App
