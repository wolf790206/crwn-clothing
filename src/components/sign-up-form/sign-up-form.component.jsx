import { useState } from 'react';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	comfirmPassword: '',
};

const SignUpFrom = () => {
	const [formFields, serFormFields] = useState(defaultFormFields);
	const { displayName, email, password, comfirmPassword } = formFields;
	const handleChange = (event) => {
		const { name, value } = event.target;
		serFormFields((prevp) => ({ ...prevp, [name]: value }));
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
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
