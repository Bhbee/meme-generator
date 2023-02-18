import React from 'react'
import './meme.css'
import memesData from "./memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className='form'>
                <input type='text' placeholder='Top text' className='form-inpuut' />
                <input type='text' placeholder='Bottom text' className='form-inpuut' />
                <button className='form-button' onClick={getMemeImage}>Get a new meme 🖼</button>
            </div>
            <img src={memeImage} className="meme-img" />
        </main>
  )
}
