import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '@utils/firebase/firebase.utils.js';

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		const { user } = response;
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			Sign in page
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
