import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '@utils/firebase/firebase.utils';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};

const SignUpFrom = () => {
	const [formFields, serFormFields] = useState(defaultFormFields);
	const { displayName, email, password, comfirmPassword } = formFields;

	const resetFromFields = () => {
		serFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		serFormFields((prevp) => ({ ...prevp, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // 取消預設觸發行為

		if (password !== comfirmPassword) {
			alert(`passwords do not match!`);
			return;
		}

		try {
			const response = await createAuthUserWithEmailAndPassword(email, password);
			// console.log(response);
			const { user } = response;
			await createUserDocumentFromAuth(user, { displayName });
			resetFromFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use')
				alert(`Cannot create user, email already in use`);
			else console.error('user creation encountered an error', error);
		}
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type="text"
					name="displayName"
					value={displayName}
					required
					onChange={handleChange}
				/>
				<label>Email</label>
				<input
					type="email"
					name="email"
					value={email}
					required
					onChange={handleChange}
				/>
				<label>Password</label>
				<input
					type="password"
					name="password"
					value={password}
					required
					onChange={handleChange}
				/>
				<label>Comfirm Password</label>
				<input
					type="password"
					name="comfirmPassword"
					value={comfirmPassword}
					required
					onChange={handleChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpFrom;
