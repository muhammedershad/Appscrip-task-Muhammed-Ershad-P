import React from 'react'
import Styles from './style.css'
import { BsColumnsGap } from "react-icons/bs";

const UpperNav = () => {
  return (
    <div className='outerLayer'>
      <div className='upperNav side'><div className='icon'><BsColumnsGap /></div>Lorem ipsum dolor</div>
      <div className='upperNav'><div className='icon'><BsColumnsGap /></div>Lorem ipsum dolor</div>
      <div className='upperNav side'><div className='icon'><BsColumnsGap /></div>Lorem ipsum dolor</div>
    </div>
  )
}

export default UpperNav