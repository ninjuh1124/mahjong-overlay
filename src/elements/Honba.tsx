import ls, { on } from "local-storage";
import { useEffect, useState } from "react";

export const Honba = () => {
	const [honba, setHonba] = useState<string>(
		(ls("honba") as unknown as string) || "0"
	);
	useEffect(() => {
		on("honba", (h: string) => {
			setHonba(h);
		});
	}, []);
	return (
		<div>
			<img className='stick' src='/sticks/riichi.png' />
			<h2 className='overlay-text'>{honba}</h2>
		</div>
	);
};
