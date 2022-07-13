import React, { useState } from 'react';

import Left from '../assets/shared/icon-arrow-left.svg';
import { Link } from 'react-router-dom';
import { useCollection } from '../hooks/useCollection';
import RoadmapProduct from '../components/RoadmapProduct';
import Loading from '../components/Loading';

export default function Roadmap() {
	const [ currentStatus, setCurrentStatus ] = useState('planned');
	const { productRequests, isPending, error } = useCollection('feedbacks');
	const planned = productRequests.filter((request) => {
		return request.status === 'planned';
	});
	const inProgress = productRequests.filter((request) => {
		return request.status === 'in-progress';
	});
	const live = productRequests.filter((request) => {
		return request.status === 'live';
	});
	return (
		<div className=" w-full flex flex-col">
			<Link to="/" className=" flex flex-row items-center justify-center space-x-4 w-max mb-12">
				<img src={Left} alt="" />
				<p>Go Back</p>
			</Link>
			{isPending && <Loading />}
			{error && <p className=" flex self-center max-w-[270px] bg-red-200 border-4 border-red-600 rounded-lg items-center p-6">{error}</p>}
			{!isPending &&
			productRequests.length > 0 && (
				<div className=" w-full lg:grid grid-cols-3 gap-3">
					<div className=" flex justify-between border-b-2 mb-10 sm:px-6 lg:hidden">
						<p
							className={
								currentStatus !== 'planned' ? (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-transparent text-gray-400 text-center border-b-4 sm:border-b-8 cursor-pointer'
								) : (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-orange-400 text-black text-center border-b-4 sm:border-b-8 cursor-pointer'
								)
							}
							onClick={() => setCurrentStatus('planned')}
						>
							Planned ({planned.length})
						</p>
						<p
							className={
								currentStatus !== 'in-progress' ? (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-transparent text-gray-400 text-center border-b-4 sm:border-b-8 cursor-pointer'
								) : (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-purple-600 text-black text-center border-b-4 sm:border-b-8 cursor-pointer'
								)
							}
							onClick={() => setCurrentStatus('in-progress')}
						>
							In-Progress ({inProgress.length})
						</p>
						<p
							className={
								currentStatus !== 'live' ? (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-transparent text-gray-400 text-center border-b-4 sm:border-b-8 cursor-pointer'
								) : (
									'pb-4 w-[33%] text-sm sm:text-lg font-bold border-green-400 text-black text-center border-b-4 sm:border-b-8 cursor-pointer'
								)
							}
							onClick={() => setCurrentStatus('live')}
						>
							Live ({live.length})
						</p>
					</div>
					{/*  planned projects  */}
					<div
						className={
							currentStatus === 'planned' ? 'w-full flex flex-col' : 'w-full lg:flex flex-col hidden'
						}
					>
						<div className=" mb-7">
							<p className=' text-lg sm:text-xl font-bold'>Planned ({planned.length})</p>
							<p>Ideas Priortized for research</p>
						</div>
						<div className=" w-full flex flex-col">
							{planned.map((request) => (
								<RoadmapProduct key={request.id} color={'orange'} product={request} />
							))}
						</div>
					</div>

					{/* projects in progress  */}
					<div
						className={
							currentStatus === 'in-progress' ? 'w-full flex flex-col' : 'w-full lg:flex flex-col hidden'
						}
					>
						<div className="mb-7">
							<p className=' text-lg sm:text-xl font-bold'>In-Progress ({inProgress.length})</p>
							<p>Currently being Developed</p>
						</div>
						<div className=" w-full flex flex-col">
							{inProgress.map((request) => (
								<RoadmapProduct key={request.id} color={'purple'} product={request} />
							))}
						</div>
					</div>

					{/* live projects  */}
					<div
						className={currentStatus === 'live' ? 'w-full flex flex-col' : 'w-full lg:flex flex-col hidden'}
					>
						<div className="mb-7">
							<p className=' text-lg sm:text-xl font-bold'>Live ({live.length})</p>
							<p>Released Features</p>
						</div>
						<div className=" w-full flex flex-col">
							{live.map((request) => (
								<RoadmapProduct key={request.id} color={'green'} product={request} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
