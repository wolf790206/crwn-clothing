import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
