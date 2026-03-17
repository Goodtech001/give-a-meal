import { Icon } from '@iconify/react'
import React from 'react'

function Title() {
  return (
    <div className='text-center mt-15 space-y-4'>
      <div className='flex font font-semibold text-3xl items-center justify-center text-[#00304C] gap-2'>
       <Icon icon="lucide:siren" width="38" height="38" className='font-bold' />
        <h1 className='font-semibold text-4xl' >Spotlight Causes</h1>
      </div>
      <p className='font text-[#00304CCC] text-lg'>Critical needs that require your immediate action to save lives today</p>
    </div>
  )
}

export default Title
