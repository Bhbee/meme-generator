import React from 'react'
import './meme.css'

const Meme = () => {
  return (
    <main>
        <form className='form'>
            <input type='text' placeholder='Top text' className='form-inpuut' />
            <input type='text' placeholder='Bottom text' className='form-inpuut' />
            <button className='form-button'>Get a new meme 🖼</button>
        </form>
    </main>
  )
}

export default Meme