import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/suggestions/icon-suggestions.svg';
// import data
import data from '../data.json';
const { productRequests } = data;

export default function Header({ sort, setSort }) {
	return (
		<div className=" absolute top-[6px] md:static rounded-none z-[2] left-0 w-screen overflow-hidden bg-[#373f68] md:w-full h-[67px] mb-4 text-white md:rounded-md text-md flex flex-row items-center justify-between py-2 px-0 sm:px-6 md:px-6 mt-16 md:mt-0">
			<div className=" flex flex-row space-x-4 items-center">
				<img src={Logo} alt="" className=" hidden sm:block" />
				<p className=" hidden sm:block">{productRequests.length} Suggestions</p>
				<p className='hidden sm:block text-sm md:text-lg'>sort by :</p>
				<select
					name=""
					id=""
					className=" m-0  w-[140px] sm:w-auto   outline-0 bg-[#373f68] flex self-center px-2 md:px-4 justify-between py-1 align-middle"
					onChange={(e) => setSort(e.target.value)}
				>
					<option value="most comments">Most Comments</option>
					<option value="least comments">Least Comments</option>
					<option value="most upvotes">Most Upvotes</option>
					<option value="least upvotes">Least Upvotes</option>
				</select>
			</div>
			<Link to="/add">
				<button className=" text-base bg-[#ad1fea] sm:text-lg w-[134px] mx-4 sm:mx-0 sm:w-[150px] h-[45px] border-[none] rounded-md">+ Add Feedback</button>
			</Link>
		</div>
	);
}
