// import { Icon } from 'lucide-react'
// import { loginWithGoogle } from '@/app/auth/auth.service'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function GoogleButton() {
  return (
    <div className='md:px-40 px-10'>
      <button type='button' className=" font flex justify-center w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-2.5 text-sm/6  text-black ring-primary/25 transition-all hover:bg-light/90 hover:ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-x-95 active:ring-2 btn-white space-x-2" >
        <Icon icon="devicon:google" width="20" height="20" className='flex justify-center items-center' />
         <p >Sign up with Google</p>
    </button>
    </div>
  )
}

export default GoogleButton