import React, { useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const users = [
	{
		name     : 'George Darwin',
		username : '@george',
		photoUrl :
			'https://firebasestorage.googleapis.com/v0/b/product-feedback-app-6c728.appspot.com/o/image-george.jpg?alt=media&token=7e9b31b7-846b-4435-b762-0d63528045c7'
	},
	{
		name     : 'James Feng',
		username : '@james',
		photoUrl :
			'https://firebasestorage.googleapis.com/v0/b/product-feedback-app-6c728.appspot.com/o/image-james.jpg?alt=media&token=d7f2233d-d3cd-4abf-9059-d809c90b8170'
	},
	{
		name     : 'Ada Fivr',
		username : '@fivr',
		photoUrl :
			'https://firebasestorage.googleapis.com/v0/b/product-feedback-app-6c728.appspot.com/o/image-roxanne.jpg?alt=media&token=8df80ab0-5f6e-414f-a473-15a951e9e6d1'
	},
	{
		name     : 'Thomas Dalton',
		username : '@thomas',
		photoUrl :
			'https://firebasestorage.googleapis.com/v0/b/product-feedback-app-6c728.appspot.com/o/image-suzanne.jpg?alt=media&token=a27c4a36-5d5e-4314-bb2c-a4e2b10d0b55'
	},
	{
		name     : 'Gabriel Luca',
		username : '@luca',
		photoUrl :
			'https://firebasestorage.googleapis.com/v0/b/product-feedback-app-6c728.appspot.com/o/image-victoria.jpg?alt=media&token=92b9a992-bda2-46b9-a713-8b4232bab659'
	}
];

const Comment = ({ id, comments }) => {
	const { updateDocument } = useFirestore('feedbacks');
	const [ counter, setCounter ] = useState(250);
	const [ comment, setComment ] = useState('');
	const [ fakeComment, setFakeComment ] = useState('');
	const [ error, setError ] = useState(null);
	const handleChange = (e) => {
		setFakeComment(e.target.value);
		const post = e.target.value.trim();
		setComment(post);
		setCounter(250 - comment.length);
		setError(null);
	};

	const handleSubmit = async (e) => {
		const userData = users[Math.floor(Math.random() * 6 - 0.2)];
		e.preventDefault();
		if (comment.length > 0) {
			setError(null);
			try {
				await updateDocument(id, {
					comments: [ ...comments, { content: comment, ...userData, id: Math.random() } ]
				});
			} catch (err) {
				setError(err);
			}
			setComment('');
			setFakeComment('');
		}
		else {
			setError('Comment cannot be empty');
		}
	};

	return (
		<div className=" w-full bg-white rounded-lg h-auto p-5 sm:p-7 my-4">
			<p>Add Comment</p>
			<form className=" w-full" onSubmit={handleSubmit}>
				{error && <p className=" mt-2 text-base text-red-600">{error}</p>}
				<textarea
					value={fakeComment}
					maxLength="250"
					onChange={handleChange}
					placeholder="Type your comment here..."
					className=" w-full h-[100px] rounded-lg bg-[#f2f4ff] my-4 p-4 focus:outline-0"
				/>
				<div className=" flex w-full justify-between items-center">
					<p className={counter < 11 ? ' text-red-600' : 'text-black'}>{counter} characters left</p>
					<button
						type="submit"
						className=" text-base bg-[#ad1fea] text-white sm:text-lg w-[134px] mx-4 sm:mx-0 sm:w-[150px] h-[45px] border-[none] rounded-md"
					>
						Post comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default Comment;
