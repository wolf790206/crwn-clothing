import { Routes, Route } from 'react-router';

import Home from '@routers/home/home.component';
import Navigation from '@routers/navigation/navigation.component';
import SignIn from '@routers/sign-in/sign-in.component';

const Shop = () => {
	return <div>I am the Shop Page</div>;
};

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="shop"
					element={<Shop />}
				/>
				<Route
					path="sign-in"
					element={<SignIn />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
