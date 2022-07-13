import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/shared/icon-comments.svg';
import Arrow from '../assets/shared/icon-arrow-up.svg'
import Down from '../assets/shared/icon-arrow-down.svg'
import { useFirestore } from '../hooks/useFirestore';


export default function RoadmapProduct({ product, color }) {
    const { updateDocument } = useFirestore('feedbacks');
	const { id, category, comments, title, upvotes, description, status } = product;
    const handleLike = async () => {
		let update = {liked : true};
		if (product.liked) {
			update = { liked: false, upvotes: upvotes - 1 };
		}
		else {
			update = { liked: true, upvotes: upvotes + 1 };
		}
		await updateDocument(id, update)
	};
	return (
		<div>
			{product && (
				<div style={{borderColor : color}} className={"w-full rounded-lg bg-white my-2 p-4 flex px-8 md:px-8 justify-between items-baseline sm:items-center space-x-8 border-t-[6px] "}>
					<div className='flex flex-col-reverse sm:flex-row '>
                    <button
							onClick={() => handleLike()}
							className={
								!product.liked ? (
									' my-2 flex-row sm:w-[40px] flex px-4 py-2 sm:flex-col space-x-2 max-w-[78px] h-auto items-center justify-center sm:space-y-2 sm:space-x-0 sm:h-[55px] rounded-lg bg-[#f2f4ff] text-blue-600 font-bold sm:mx-1  bottom-0 left-0 '
								) : (
									'bg-blue-600 text-[#f2f4ff]  my-2 flex-row sm:w-[40px] flex px-4 py-2 sm:flex-col space-x-2 max-w-[78px] h-auto items-center justify-center sm:space-y-2 sm:space-x-0 sm:h-[55px] rounded-lg font-bold sm:mx-1  bottom-0 left-0 '
								)
							}
						>
							{!product.liked && <img src={Arrow} alt="" />}
							{product.liked && <img src={Down} alt="" />}
							<p>{upvotes}</p>
						</button>
						<Link to={`/details/${id}`} className=" sm:ml-10">
                            <div className=' flex flex-row space-x-3 items-center my-2'>
                                <span style={{backgroundColor : color}} className=' w-2 h-2 rounded-full'></span>
                                <p className=' text-lg capitalize'>{status}</p>
                            </div>
							<h3 className=' text-base font-bold text-blue-600 my-1'>{title}</h3>
							<p className=' text-base my-1'>{description}</p>
							<button className=" px-5 py-2 flex items-center h-[30px] rounded-lg bg-[#f2f4ff] text-blue-600 font-bold my-2">
								{category}
							</button>
						</Link>
					</div>
					{comments && (
						<Link to={`/details/${id}`} className="flex items-center justify-center space-x-3">
							<img src={Icon} alt="" />
							<p>{comments.length}</p>
						</Link>
					)}
					{!comments && (
						<Link to={`/details/${id}`} className=" flex items-center justify-center space-x-3">
							<img src={Icon} alt="" />
							<p>0</p>
						</Link>
					)}
				</div>
			)}
		</div>
	);
}
