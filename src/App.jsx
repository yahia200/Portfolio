import React from 'react'

function App() {
  let li_style = "px-16 transition delay-100 ease-in-out hover:text-ctp-lavender"

  return (
    <body className='text-ctp-text p-0 m-0 bg-ctp-crust font-outfit font-semibold'>
        <header className='flex justify-between items-center px-30px py-4'>
            <a class="logo" href="/"><img src="../onion.jpeg" className='size-12 rounded-full ml-20' alt="logo"/></a>
            <nav>
                <ul className='flex'>
                    <li className={li_style}><a href="#">Services</a></li>
                    <li className={li_style}><a href="#">Projects</a></li>
                    <li className={li_style}><a href="#">About</a></li>
                </ul>
            </nav>
            <a className=" bg-ctp-blue text-black px-8 py-2 rounded-full mr-20 transition delay-100 ease-in-out hover:bg-ctp-sapphire" href="#">Contact</a>
            

        </header>
    </body>
  )
}

export default App