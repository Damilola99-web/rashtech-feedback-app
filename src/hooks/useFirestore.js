import { db } from '../firebase/config';
import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

export const useFirestore = (collectionName) => {
    const addDocument = async (data) => {
        const ref = collection(db, collectionName);
		await addDoc(ref, {
			...data,
			comments: [],
			status: 'planned',
			liked: false,
			upvotes: Math.floor(Math.random() * 100)
		});
	};

    const deleteDocument = async (id) => {
        const ref = doc(db, collectionName, id)
        await deleteDoc(ref)
    }

    const updateDocument = async (id, data) =>{
        const ref = doc(db, collectionName, id)
        await updateDoc(ref, {...data})
    }

	return { addDocument, deleteDocument, updateDocument };
};
