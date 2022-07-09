import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey            : 'AIzaSyAdmIJ8vucsocXCbldbFCgJTXtyP4jYZVQ',
	authDomain        : 'product-feedback-app-6c728.firebaseapp.com',
	projectId         : 'product-feedback-app-6c728',
	storageBucket     : 'product-feedback-app-6c728.appspot.com',
	messagingSenderId : '898865143369',
	appId             : '1:898865143369:web:ca2947c95a848efb24a998'
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
