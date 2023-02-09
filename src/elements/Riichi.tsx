import ls, { on } from "local-storage";
import { useEffect, useState } from "react";

export const Riichi = () => {
	const [riichi, setRiichi] = useState<string>(
		(ls("riichi") as unknown as string) || "0"
	);
	useEffect(() => {
		on("riichi", (r: string) => {
			setRiichi(r);
		});
	}, []);
	return (
		<div>
			<img className='stick' src={`${process.env.PUBLIC_URL}/sticks/riichi.png`} />
			<h2 className='overlay-text'>{riichi}</h2>
		</div>
	);
};
