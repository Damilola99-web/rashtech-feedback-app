import React, { useState } from 'react';

export default function CommentData({ comment }) {
	const [ replyOpen, setReplyOpen ] = useState(false);
	return (
		<div key={comment.id} className=" w-full flex flex-row justify-center border-b-2 my-3 p-4 space-x-8">
			<img src={comment.photoUrl} alt="" className=" rounded-full w-12 h-12" />
			<div className=" w-full flex flex-col justify-center space-y-6 mb-4">
				<div className=" w-full flex items-center justify-between">
					<div className=" flex flex-col justify-center">
						<p className=' text-base text-blue-800 font-bold'>{comment.name}</p>
						<p>{comment.username}</p>
					</div>
					<p className=' text-blue-600'>Reply</p>
				</div>
                <p className=' text-blue-800'>{comment.content}</p>
			</div>
		</div>
	);
}
