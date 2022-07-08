import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Roadmap({ navOpen, productRequests }) {
	const [ planned, setPlanned ] = useState(null);
	const [ inProgress, setInProgress ] = useState(null);
	const [ live, setLive ] = useState(null);

	let checkplanned = 0;
	let checkprogress = 0;
	let checklive = 0;

	productRequests?.forEach((product) => {
		if (product.status == 'in-progress') {
			checkprogress += 1;
		}
		else if (product.status == 'planned') {
			checkplanned += 1;
		}
		else if (product.status == 'live') {
			checklive += 1;
		}
	});

	useEffect(
		() => {
			setInProgress(checkprogress);
			setLive(checklive);
			setPlanned(checkplanned);
		},
		[ productRequests ]
	);

	return (
		<div
			className={
				!navOpen ? (
					'hidden md:flex flex-col  w-full h-[200px] bg-white rounded-lg p-6'
				) : (
					' flex flex-col w-full h-[200px] bg-white rounded-lg p-10'
				)
			}
		>
			<div className="flex flex-row justify-between items-center">
				<p>Roadmap</p>
				<Link to="/roadmap">View</Link>
			</div>
			<div className=" mt-10">
				<div className="flex flex-row justify-between items-center">
					<p>Planned</p>
					<p>{planned}</p>
				</div>
				<div className="flex flex-row justify-between items-center">
					<p>In-Progress</p>
					<p>{inProgress}</p>
				</div>
				<div className="flex flex-row justify-between items-center">
					<p>Live</p>
					<p>{live}</p>
				</div>
			</div>
		</div>
	);
}
