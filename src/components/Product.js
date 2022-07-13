import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/shared/icon-comments.svg';
import Arrow from '../assets/shared/icon-arrow-up.svg'
import Down from '../assets/shared/icon-arrow-down.svg'

export default function Product({ product }) {
	const { id, category, comments, title, upvotes, description } = product;
	return (
		<Link to={`/details/${id}`}>
			{product && (
				<div className="w-full rounded-lg bg-white my-2 p-4 flex px-8 md:px-8 justify-between items-baseline sm:items-center space-x-8 ">
					<div className='flex flex-col-reverse sm:flex-row '>
						<button onClick={()=>alert('clicked')} className=" my-2 flex-row sm:w-[40px] flex px-4 py-2 sm:flex-col space-x-2 max-w-[78px] h-auto items-center justify-center sm:space-y-2 sm:space-x-0 sm:h-[55px] rounded-lg bg-[#f2f4ff] text-blue-600 font-bold sm:mx-1  bottom-0 left-0 ">
							<img src={Arrow} alt="" />
							<p>{upvotes}</p>
						</button>
						<div className=" sm:ml-10">
							<h3 className=' text-base font-bold text-blue-600 my-1'>{title}</h3>
							<p className=' text-base my-1'>{description}</p>
							<button className=" px-5 py-2 flex items-center h-[30px] rounded-lg bg-[#f2f4ff] text-blue-600 font-bold my-2">
								{category}
							</button>
						</div>
					</div>
					{comments && (
						<div className="flex items-center justify-center space-x-3">
							<img src={Icon} alt="" />
							<p>{comments.length}</p>
						</div>
					)}
					{!comments && (
						<div className=" flex items-center justify-center space-x-3">
							<img src={Icon} alt="" />
							<p>0</p>
						</div>
					)}
				</div>
			)}
		</Link>
	);
}
