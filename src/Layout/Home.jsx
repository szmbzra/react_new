import React from 'react'
import {rentBuy, slider} from '../components/data'
import Title from '../components/Title'

const Home = () => {

  return (
    <div>
     {/* slider banner */}
     <div className="bg-slate-500 h-[600px] flex">
      <div className="container mx-auto">
      <div className="grid grid-cols-2 justify-center items-center h-full">
        <div className="child_one justify-self-end">
          <div className="w-[38.5rem] text-white">
          <h1 className='text-6xl font-bold  leading-tight'>Choose your home <br></br>for future life</h1>
        <p className='pe-10'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>
          </div>
        </div>
        <div className="child_two ">
          <div className="flex">
         <button className=" bg-defaultColor text-white w-28 h-12 rounded-tl-lg font-bold">Rent</button>
         <button className="  bg-orange-100 w-28 h-12 rounded-tr-lg  font-bold">Buy</button>
          </div>
          <div className="bg-white  w-[441px] h-auto p-6 rounded-tr-md  rounded-bl-md rounded-br-md ">
          <div className="h-12 w-full">
            <input type="text" placeholder='Type keyword...' className='placeholder:text-slate-400 h-14 rounded-md w-full border-2 border-neutral-200 ps-5 ' />
          </div>
          <div className="w-full mt-6">
            <select name="" id="" className='h-12 w-full border-2 border-neutral-200 ps-5'>
            <option value="">Property Type</option>
            </select>
          </div>
          <div className="h-12 w-full mt-6">
            <select name="" id="" className='h-12 w-full border-2 border-neutral-200 ps-5'>
            <option value="">Location</option>
            </select>
          </div>
          <div className="flex justify-between gap-2 mt-6">
  <button className=' bg-orange-300 grow h-12 rounded-md'>Filter</button>
  <button className='bg-defaultColor grow rounded-md'>Search Now</button>
</div>
          </div>
         <ul className='flex justify-between  mt-3 w-[441px] text-white'>
{rentBuy.map(({id, name})=>(
  <li key={id}><a href="">{name}</a></li>
))}
         </ul>
        </div>
      </div>
      </div>
     </div>
     {/* text titile */}
<div className="text-center">
<Title heading = "Explore our listings" subTitle= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo" />
</div>
{/* Slider */}
<div className="container mx-auto">
<div className="flex justify-between text-center">
  {slider.map(({id,name, listing})=>(
  <div className="items" key={id}>
  <div className="rounded-full h-28 w-28 bg-slate-300 mb-3"></div>
 <h2 className="font-bold">{name}</h2>
  <p>{listing} listing</p>
 </div>
  ))}
</div>
</div>
    </div>
  )
}

export default Home
