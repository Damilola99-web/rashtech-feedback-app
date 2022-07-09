import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Left from '../assets/shared/icon-arrow-left.svg';
import EditIcon from '../assets/shared/icon-edit-feedback.svg';
import { Link } from 'react-router-dom';

const Edit = () => {
	const { id } = useParams();
	const [ title, setTitle ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ status, setStatus ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(title, category, description);
	};
	const handleDelete = async (e) => {
		e.preventDefault();
		console.log('deleted');
	};
	return (
		<div className=" flex flex-col w-full">
			<Link to={`/details/${id}`} className=" flex flex-row items-center justify-center space-x-4 w-max">
				<img src={Left} alt="" />
				<p>Go Back</p>
			</Link>
			<div className=" bg-white my-10 px-6 sm:px-14 py-14 rounded-2xl relative max-w-[1100px] self-center">
				<img src={EditIcon} alt="add-icon" className=" w-12 absolute top-[-1.5rem] left-6 sm:left-12" />
				<p className=" text-2xl font-bold my-6 mb-10">Editing More comprehensive reports</p>

				<form className="my-4" onSubmit={handleSubmit}>
					<label className=" mb-8 block">
						<span className=" text-lg font-bold block mb-1">Feedback Title</span>
						<span className=" text-lg block mb-6">Add a short, descriptive headline</span>
						<input
							required
							className=" bg-[#f2f4ff] focus:border-0 focus:outline-0 w-full h-[60px] rounded-xl px-6"
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label className=" mb-8 block">
						<span className=" text-lg font-bold block mb-1">Category</span>
						<span className=" text-lg block mb-6">Select a category</span>
						<select
							required
							id="category"
							className=" bg-[#f2f4ff] focus:border-0 focus:outline-0 w-full h-[60px] rounded-xl px-6"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="feature">Feature</option>
							<option value="ui">UI</option>
							<option value="ux">UX</option>
							<option value="enhancement">Enhancement</option>
							<option value="bug">Bug</option>
						</select>
					</label>
					<label className=" mb-8 block">
						<span className=" text-lg font-bold block mb-1">Update Status</span>
						<span className=" text-lg block mb-6">Change feature state</span>
						<select
							required
							className=" bg-[#f2f4ff] focus:border-0 focus:outline-0 w-full h-[60px] rounded-xl px-6"
							value={status}
							onChange={(e) => setStatus(e.target.value)}
						>
							<option value="planned">Planned</option>
							<option value="in-progress">In-progress</option>
							<option value="live">Live</option>
						</select>
					</label>
					<label className=" mb-8 block">
						<span className=" text-lg font-bold block mb-1">Feedback Detail</span>
						<span className=" text-lg block mb-6">
							Include any specific comment on what should be added, improved, etc.
						</span>
						<textarea
							required
							className=" bg-[#f2f4ff] py-6 focus:border-0 focus:outline-0 w-full h-[150px] rounded-xl px-6"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</label>
					<div className=" w-full space-y-4  flex flex-col sm:flex-row items-center justify-end sm:space-x-4 sm:space-y-0">
						<button
							type="submit"
							className=" w-full sm:w-auto px-6 h-[50px] text-base  font-bold text-white rounded-lg bg-[#ad1fea]"
						>
							Save Changes
						</button>
						<Link
							to={`/details/${id}`}
							className=" justify-center w-full sm:w-auto flex items-center px-6 h-[50px] text-base font-bold text-white rounded-lg bg-[#373f68]"
						>
							Cancel
						</Link>
                        <span
							type="submit"
                            onClick={handleDelete}
							className=" justify-center flex items-center w-full sm:w-auto px-6 h-[50px] text-base  font-bold text-white rounded-lg bg-red-600"
						>
							Delete
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Edit;
