import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Left from '../assets/shared/icon-arrow-left.svg';
import Comment from '../components/Comment';
import CommentList from '../components/CommentList';
import Product from '../components/Product';
import { useDocument } from '../hooks/useDocument';

export default function Details() {
	const { id } = useParams();
	const {error, product, isPending} = useDocument(id, 'feedbacks')
	return (
		<div className=" w-full flex flex-col">
			<div className=" w-full flex flex-row justify-between items-center mb-10">
				<Link to="/" className=" flex flex-row items-center justify-center space-x-4 w-max">
					<img src={Left} alt="" />
					<p>Go Back</p>
				</Link>
				{product && <Link to={`/edit/${id}`}>
					<button className=" text-base bg-blue-600 text-white sm:text-lg w-[134px] mx-4 sm:mx-0 sm:w-[150px] h-[45px] border-[none] rounded-md">
						Edit
					</button>
				</Link>}
			</div>
			{isPending && <p>Loading...</p>}
			{product && <Product product={product} />}
			{product?.comments.length > 0 && <CommentList comments={product.comments} />}
			{product && <Comment id={id} comments={product?.comments} />}
			{error && <p>{error}</p>}
		</div>
	);
}
