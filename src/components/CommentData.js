import React, { useState } from 'react';

export default function CommentData({ comment }) {
	const [ replyOpen, setReplyOpen ] = useState(false);
	return (
		<div key={comment.id} className=" w-full flex flex-row justify-center border-b-2 my-3 p-4 space-x-8">
			<img src={comment.photoUrl} alt="" className=" rounded-full w-12 h-12" />
			<div className=" w-full flex flex-col justify-center space-y-6 mb-4">
				<div className=" w-full flex items-center justify-between">
					<div className=" flex flex-col justify-center">
						<p className=" text-base text-blue-800 font-bold">{comment.name}</p>
						<p>{comment.username}</p>
					</div>
					<p className=" cursor-pointer text-blue-600" onClick={() => setReplyOpen(true)}>
						Reply
					</p>
				</div>
				<p className=" text-blue-800">{comment.content}</p>
				{replyOpen && (
					<form className=' flex flex-col md:flex-row justify-between space-y-4 md:space-y-0'>
						<textarea placeholder={`Reply to ${comment.username}`} className=' w-full md:w-[75%] h-[70px] rounded-lg bg-[#f2f4ff] p-3 focus:outline-blue-600' />
						<div className=' w-full md:w-[23%] md:max-w-[200px] flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3'>
							<span
								onClick={() => setReplyOpen(false)}
								className=" cursor-pointer justify-center flex items-center w-full  px-6 h-[50px] text-base  font-bold text-white rounded-lg bg-red-600"
							>
								Cancel
							</span>
							<span
								type="submit"
								className=" cursor-pointer justify-center flex items-center w-full s px-6 h-[50px] text-base  font-bold text-white rounded-lg bg-[#ad1fea]"
							>
								Post reply
							</span>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}
