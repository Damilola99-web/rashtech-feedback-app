import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { onSnapshot, doc, collection } from 'firebase/firestore';

export const useDocument = (id, collectionName) => {
	const [ product, setProduct ] = useState(null);
	const [ error, setError ] = useState(null);
	const [isPending, setIsPending] = useState(false)

	useEffect(
		() => {
			const ref = doc(db, collectionName, id);
			setIsPending(true)
			const unsub = onSnapshot(
				ref,
				(snapshot) => {
					if (snapshot.data()) {
						setIsPending(false)
						setProduct({ ...snapshot.data(), id: snapshot.id });
						setError(null);
					}
					else {
						setIsPending(false)
						setError('Cannot Find Data');
					}
				},
				(err) => {
					setIsPending(false)
					setError('Could not fetch data');
				}
			);

			return () => unsub();
		},
		[ id, collectionName ]
	);

	return { product, error, isPending };
};
