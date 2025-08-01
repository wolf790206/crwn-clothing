import { Routes, Route, Outlet } from 'react-router';

import Home from '@routers/home/home.component';

const Navigation = () => {
	return (
		<div>
			<div>I am the Navigation Bar</div>
			<Outlet />
		</div>
	);
};

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
			</Route>
		</Routes>
	);
}

export default App;
