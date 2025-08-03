import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAco6xhLdhjxsVb4Wg3okjvsDrRuREyUds',
	authDomain: 'crwn-clothing-db-ce2c1.firebaseapp.com',
	projectId: 'crwn-clothing-db-ce2c1',
	storageBucket: 'crwn-clothing-db-ce2c1.firebasestorage.app',
	messagingSenderId: '561675895952',
	appId: '1:561675895952:web:1a13ef765dd08713a7c415',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid); // database, Collections, Documents
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());
	// check user data not exist
	if (!userSnapshot.exists()) {
		console.log('userAuth : ', userAuth);
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	// user data exist
	return userDocRef;
};
