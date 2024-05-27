import React from 'react'
import {navbar} from './data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className=' flex justify-between'>
       {navbar.map(({id,name, urlLink})=>(
<li key={id} className='text-red-600  '>
    <Link to={urlLink}>{name}</Link>
</li>
       ))}
      </ul>
    </div>
  )
}

export default Navbar
