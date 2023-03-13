import React from 'react'
import { footerBottomItem } from '../../constants'

function FooterBottom() {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div  className='w-full grid grid-cols-5 gap-4 place-content-center text-gray-400'>
          {
            footerBottomItem.map((item)=>(
              <div className='group cursor-pointer' key={item._id} >
                <h3 className='footerBottomTitle'>{item.title}</h3>
                <p className='footerBottomText'>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FooterBottom