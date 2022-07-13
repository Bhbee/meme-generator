import React from 'react'
import './header.css'
import FROYO from '../../assets/froyo.jpg'

const Header = () => {
  return (
    <header className='header'>
      <img src={FROYO} className='header-image' />
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-project'>React Course- meme project</h4>
    </header>
  )
}

export default Header