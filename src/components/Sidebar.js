import React, { useState } from 'react';
import { useCollection } from '../hooks/useCollection';
import Filter from './Filter';
import Navbar from './Navbar';
import Roadmap from './Roadmap';


export default function Sidebar({ navOpen, setNavOpen, filter, setFilter }) {
	const { productRequests } = useCollection('feedbacks')
	return (
		<div className=" flex flex-row lg:flex-col lg:space-y-4 lg:space-x-0 md:space-x-4 md:space-y-0 space-y-4  ">
			<Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
			<div
				className={
					navOpen ? (
						' space-y-8 pt-28 px-8 pb-8 h-screen w-[290px] bg-[#f2f4ff] md:bg-transparent md:flex fixed top-0 right-0 md:w-full z-10 md:static md:flex-row md:h-auto lg:flex-col lg:space-y-4 md:space-x-4'
					) : (
						'md:w-full md:space-x-4 md:bg-transparent lg:space-y-4 h-screen md:flex lg:flex-col bg-white fixed top-0 right-0 z-10 md:static md:flex-row md:h-auto lg:space-x-0'
					)
				}
			>
				<Filter filter={filter} setFilter={setFilter}  navOpen={navOpen} />
				<Roadmap productRequests={productRequests} navOpen={navOpen} />
			</div>
		</div>
	);
}
