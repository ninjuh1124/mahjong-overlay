import ls, { on } from "local-storage";
import { useEffect, useState } from "react";

export const Dora = () => {
	const [dora, setDora] = useState<string>(
		(ls("dora") as unknown as string) || ""
	);
	useEffect(() => {
		on("dora", (d: string) => {
			setDora(d);
		});
	}, []);
	return (
		<>
			{Array.from({ length: 5 })
				.map((_, i) => {
					const indicators = dora.split(" ");
					let value = indicators[i];
					if (!value) {
						return "blank";
					} else if (value.length !== 2) {
						return "blank";
					} else if (!"1235468790".includes(value[0])) {
						return "blank";
					} else if (!"spmz".includes(value[1])) {
						return "blank";
					} else {
						return value;
					}
				})
				.map((tile) => (
					<img src={`${process.env.PUBLIC_URL}/tiles/${tile}.png`} />
				))}
		</>
	);
};
