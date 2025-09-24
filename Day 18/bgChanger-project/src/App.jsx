import { useState } from 'react'
import './App.css'

function App() {
let [color, setColor] = useState('skyblue')

const changeColor = (colorName) =>{
  setColor(() => color = colorName)
}

  return (
    <div className='w-full h-screen duration-200 relative' style={{backgroundColor: color}}>
      <h1 className='text-3xl font-bold text-center text-white py-5'>Welcome to My Background Changer App</h1>
      <h2 className='text-lg md:text-2xl font-bold text-center text-white'>Click below buttons to change the color</h2>
      <p className='text-xs md:text-lg text-center text-white py-5'>This is a part of my day 18 of 60 days of coding challenge.</p>
      <div className='fixed flex flex-wrap justify-center gap-5 px-3 py-2 mx-6 shadow-lg bg-white bottom-12 inset-x-0 rounded-3xl'>
        <button onClick={() => changeColor("red")} className='bg-red-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Lite Red</button>
        <button onClick={() => changeColor("green")}  className='bg-green-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Green</button>
        <button onClick={() => changeColor("blue")}  className='bg-blue-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Blue</button>
        <button onClick={() => changeColor("yellow")}  className='bg-yellow-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Yellow</button>
        <button onClick={() => changeColor("orange")}  className='bg-orange-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Orange</button>
        <button onClick={() => changeColor("pink")}  className='bg-pink-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Pink</button>
        <button onClick={() => changeColor("black")}  className='bg-black text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Black</button>
        <button onClick={() => changeColor("gray")}  className='bg-gray-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Black</button>
        <button onClick={() => changeColor("violet")}  className='bg-violet-400 text-white px-4 py-2 outline-none cursor-pointer rounded-full shadow-sm'>Violet</button>
      </div>
    </div>
  )
}

export default App
