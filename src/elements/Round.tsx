import ls, { on } from "local-storage";
import { useEffect, useState } from "react";

const KANJI_MAP: any = {
	E: "東",
	S: "南",
	W: "西",
	N: "北",
};

export const Round = () => {
	const [round, setRound] = useState<string>(
		(ls("round") as unknown as string) || "E1"
	);
	useEffect(() => {
		on("round", (r: string) => {
			setRound(r);
		});
	}, []);

	const kanji = `${KANJI_MAP[round[0]]}${round[1]}`;

	return (
	<h1 className="overlay-text">
		{kanji}
	</h1>
	)
};
