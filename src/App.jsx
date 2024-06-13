import React from 'react'

function App() {
  return (
    <body className='text-ctp-text'>
        <header className='flex justify-between items-center px-30px py-4'>
            <a class="logo" href="/"><img src="../onion.jpeg" className='size-16 rounded-full' alt="logo"/></a>
            <nav>
                <ul className="flex">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className="bg-ctp-green text-black px-8 py-2 rounded-full" href="#">Contact</a>
            <p className="bg-ctp-green text-black px-8 py-2 rounded-full">Menu</p>
        </header>
    </body>
  )
}

export default App