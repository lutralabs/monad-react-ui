import { useState } from "react";
import { Checkbox } from "./components/Checkbox";
import { Label } from "./components/Label";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex items-center justify-center w-full h-full p-4">
			<div className="flex items-center p-32 bg-white gap-x-2">
				<Checkbox size={"md"} id="checkbox" />
				<Label htmlFor="checkbox">Checkbox</Label>
			</div>
		</div>
	);
}

export default App;
