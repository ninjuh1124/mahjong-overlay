import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Console } from "./Console";
import { Dora, Honba, Riichi, Round } from "./elements";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Console />} />
				<Route path='/dora' element={<Dora />} />
				<Route path='round' element={<Round />} />
				<Route path='honba' element={<Honba />} />
				<Route path='riichi' element={<Riichi />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
