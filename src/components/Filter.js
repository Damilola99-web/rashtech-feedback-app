import React from 'react';

export default function Filter({navOpen, filter, setFilter}) {
  return (
    <div className= {!navOpen? 'hidden md:flex flex-row items-start flex-wrap w-full h-[200px]  bg-white rounded-lg p-6': '  flex flex-row flex-wrap w-full h-[200px] bg-white rounded-lg p-6'}>
      <button className={filter=='all'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('all')}>All</button>
      <button className={filter=='ui'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('ui')}>UI</button>
      <button className={filter=='ux'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('ux')}>UX</button>
      <button className={filter=='enhancement'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('enhancement')}>Enhancement</button>
      <button className={filter=='bug'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('bug')}>Bug</button>
      <button className={filter=='feature'? ' px-3 h-[30px] rounded-md text-[#f2f4ff] bg-blue-600 font-bold mx-1':' px-3 h-[30px] rounded-md bg-[#f2f4ff] text-blue-600 font-bold mx-1'} onClick={()=>setFilter('feature')}>Feature</button>
    </div>
  );
}
