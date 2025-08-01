import { Routes, Route } from 'react-router';

import Home from '@routers/home/home.component';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
		</Routes>
	);
}

export default App;
