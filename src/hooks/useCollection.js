import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useCollection = (collectionName) => {
	const [ productRequests, setProductRequests ] = useState([]);
	
	useEffect(
		() => {
			const ref = collection(db, collectionName);
			const unsub = onSnapshot(ref, (snapshot) => {
				let result = [];
				snapshot.docs.forEach((doc) => {
					result.push({ id: doc.id, ...doc.data() });
				});
				setProductRequests(result);
			});
			return () => unsub();
		},
		[ collectionName ]
	);

	return { productRequests };
};
