import { useState } from 'react'
import './style/App.css'
import './style/font.css'
import Footer from './components/footer'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="body">
        <p>mnsdie ubgruger bgeurgtrbui gurg vgurgbrugtruotgb trgr b gigbtr i</p>
      </div>
    </>
  )
}

export default App