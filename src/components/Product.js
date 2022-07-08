import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/shared/icon-comments.svg';

export default function Product({ product }) {
	const { id, category, comments, title, upvotes, description } = product;
	return (
		<Link to={`/details/${id}`}>
			{product && (
				<div className="w-full rounded-lg bg-white my-2 p-4 flex px-8 md:px-8 justify-between items-center space-x-8 relative">
					<p className=' absolute bottom-0 left-0 md:static'>upvotes : {upvotes}</p>
					<div className=''>
						<h3>{title}</h3>
						<p>{description}</p>
						<p>Category: {category}</p>
					</div>
					{comments && (
						<div className='flex items-center justify-center space-x-3'>
							<img src={Icon} alt="" />
							<p>{comments.length}</p>
						</div>
					)}
					{!comments && (
						<div className=' flex items-center justify-center space-x-3'>
							<img src={Icon} alt="" />
							<p>0</p>
						</div>
					)}
				</div>
			)}
		</Link>
	);
}
