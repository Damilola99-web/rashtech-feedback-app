import React from 'react';
import Open from '../assets/shared/mobile/icon-hamburger.svg';
import Close from '../assets/shared/mobile/icon-close.svg';

export default function({ navOpen, setNavOpen }) {
	return (
		<div className=" w-screen fixed top-0 px-8 left-0 md:static lg:w-full h-[80px] items-center md:h-[200px] justify-between colorful flex md:w-[36%] flex-row md:rounded-lg md:justify-start md:items-end md:p-6 z-20">
			<div>
				<p className=" text-white text-lg align-middle">Rashtech World</p>
				<p className=" text-white text-lg align-middle">Feedback board</p>
			</div>
			<div className=" md:hidden">
				{!navOpen && <img src={Open} onClick={()=>setNavOpen(!navOpen)} className=" w-[26px] cursor-pointer" alt="" />}
				{navOpen && <img src={Close} onClick={()=>setNavOpen(!navOpen)} className=" w-[26px] cursor-pointer" alt="" />}
			</div>
		</div>
	);
}
