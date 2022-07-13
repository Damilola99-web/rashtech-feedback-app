import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useCollection = (collectionName) => {
	const [ productRequests, setProductRequests ] = useState([]);
	const [isPending, setIsPending] = useState(false)
	
	useEffect(
		() => {
			const ref = collection(db, collectionName);
			setIsPending(true)
			const unsub = onSnapshot(ref, (snapshot) => {
				let result = [];
				snapshot.docs.forEach((doc) => {
					result.push({ id: doc.id, ...doc.data() });
				});
				setProductRequests(result);
				setIsPending(false)
			});
			return () => unsub();
		},
		[ collectionName ]
	);

	return { productRequests, isPending };
};
