import React from 'react'

function FooterMiddleList({title,listItem}) {
  return (
    <div className='w-full'>
         <div>
              <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
              <ul className='flex flex-col gap-2 font-bodyFont'>
                {
                  listItem.map((item)=>item.listData.map((data,index)=>(
                    <li className='footerLink' key={index}  >{data}</li>
                  )))
                }
              </ul>
              </div>
    </div>
  )
}

export default FooterMiddleList