import React, { useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
	const { productRequests, isPending } = useCollection('feedbacks');
	const [ filter, setFilter ] = useState('all');
	const [ sort, setSort ] = useState('most comments');

	const filteredRequests = productRequests.filter((product) => {
		switch (filter) {
			case 'all':
				return true;
			case 'ui':
				return filter === product.category;
			case 'ux':
				return filter === product.category;
			case 'enhancement':
				return filter === product.category;
			case 'bug':
				return filter === product.category;
			case 'feature':
				return filter === product.category;
			default:
				return true;
		}
	});

	filteredRequests.sort((a, b) => {
		switch (sort) {
			case 'most comments':
				return b.comments.length - a.comments.length;
			case 'least comments':
				return a.comments.length - b.comments.length;
			case 'most upvotes':
				return b.upvotes - a.upvotes;
			case 'least upvotes':
				return a.upvotes - b.upvotes;
			default:
				return 0;
		}
	});

	const [ navOpen, setNavOpen ] = useState(false);
	return (
		<div className=" mt-28 md:mt-0  md:flex md:flex-col md:space-y-12 lg:grid lg:grid-cols-[2fr,6fr] lg:space-y-0 lg:gap-4 w-full max-w-[1200px]">
			{navOpen && <div className=" w-screen h-screen fixed top-0 left-0 bg-black opacity-70 z-[5]" />}
			<Sidebar
				productRequests={productRequests}
				filter={filter}
				setFilter={setFilter}
				navOpen={navOpen}
				setNavOpen={setNavOpen}
			/>
			<div className="flex flex-col">
				<Header sort={sort} setSort={setSort} />
				<div className=" flex flex-col">
					{filteredRequests &&
						filteredRequests.map((product) => <Product product={product} key={product.id} />)}
					{!isPending &&
					filteredRequests.length === 0 && (
						<p className=" flex self-center max-w-[270px] bg-white rounded-lg items-center p-6">
							No feedback on {filter} yet.
						</p>
					)}
					{isPending && <Loading />}
				</div>
			</div>
		</div>
	);
};

export default Home;
