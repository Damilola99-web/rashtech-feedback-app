import React from 'react';

import Left from '../assets/shared/icon-arrow-left.svg';
import { Link } from 'react-router-dom';
import { useCollection } from '../hooks/useCollection';
import RoadmapProduct from '../components/RoadmapProduct';

export default function Roadmap() {
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
			<Link to="/" className=" flex flex-row items-center justify-center space-x-4 w-max my-6">
				<img src={Left} alt="" />
				<p>Go Back</p>
			</Link>
			{isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
			{ !isPending && productRequests.length > 0 && (
				<div className=" w-full lg:grid grid-cols-3 gap-3">
					{/*  planned projects  */}
					<div className="w-full flex flex-col">
						<div className=' mb-7'>
							<p>Planned ({planned.length})</p>
							<p>Ideas Priortized for research</p>
						</div>
						<div className=" w-full flex flex-col">
							{planned.map((request) => <RoadmapProduct key={request.id} color={'orange'} product={request} />)}
						</div>
					</div>

					{/* projects in progress  */}
					<div className="w-full flex flex-col">
						<div className='mb-7'>
							<p>In-Progress ({inProgress.length})</p>
							<p>Currently being Developed</p>
						</div>
						<div className=" w-full flex flex-col">
							{inProgress.map((request) => <RoadmapProduct key={request.id} color={'purple'} product={request} />)}
						</div>
					</div>

					<div className="w-full flex flex-col">
						<div className='mb-7'>
							<p>Live ({live.length})</p>
							<p>Released Features</p>
						</div>
						<div className=" w-full flex flex-col">
							{live.map((request) => <RoadmapProduct key={request.id} color={'green'} product={request} />)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
