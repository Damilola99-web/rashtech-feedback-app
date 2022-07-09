import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { onSnapshot, doc, collection } from 'firebase/firestore';

export const useDocument = (id, collectionName) => {
	const [ product, setProduct ] = useState(null);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			const ref = doc(db, collectionName, id);
			const unsub = onSnapshot(
				ref,
				(snapshot) => {
					if (snapshot.data()) {
						setProduct({ ...snapshot.data(), id: snapshot.id });
						setError(null);
					}
					else {
						setError('Cannot Find Data');
					}
				},
				(err) => {
					setError('Could not fetch data');
				}
			);

			return () => unsub();
		},
		[ id, collectionName ]
	);

	return { product, error };
};
