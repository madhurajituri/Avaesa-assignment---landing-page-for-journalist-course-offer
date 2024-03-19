import React from 'react'

function Navbar() {
    return (
        <div className='w-full bg-purple-900/80 fixed p-2 px-6 items-center flex justify-between text-white text-base z-50'>
            <div className="gap-10 flex">
                <div className='hover:bg-white/20 rounded-lg px-4 py-1'>Home</div>
                <div className='hover:bg-white/20 rounded-lg px-4 py-1'>About the Course</div>
                <div className='hover:bg-white/20 rounded-lg px-4 py-1'>FAQ's</div>
            </div>
            <div className='gap-10 flex'>
                <button className='bg-white text-black hover:bg-purple-950 hover:text-white px-4 py-1 rounded-lg'>Login</button>
                <button className='bg-purple-950 text-white hover:bg-white hover:text-black px-4 py-1 rounded-lg'>Signup</button>
            </div>
        </div>
    )
}

export default Navbar