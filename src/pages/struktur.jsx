import React from 'react'
import Bagan from '../assets/bagan.jpg'
import './Struktur.css'
import Navbar from '../components/Navbar'

function Struktur() {
  return (
    <div className='div'>
      <Navbar></Navbar>
      <div className='heading'>STRUKTUR KEPENGURUSAN</div><br></br>
      <img className="bagan-struktur" src={Bagan} alt="Struktur"></img>
      
    </div>
  )
}

export default Struktur

