import ls from "local-storage";
import { useRef } from "react";

type ButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const Console = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const onPrevRound = (e: ButtonEvent) => {
		e.preventDefault();
		const input: HTMLInputElement =
			form.current!.querySelector("input#round")!;
		const currentRound = input.value.toString() || "";
		if (currentRound === "E1") {
			return;
		}

		let wind = currentRound[0] || "E";
		let number = parseInt(currentRound[1]) || -1;
		if (number === -1) {
			number = 1;
		} else if (number === 1) {
			number = 4;
			wind = (() => {
				switch (currentRound[0]) {
					case "N":
						return "W";
					case "W":
						return "S";
					default:
						return "E";
				}
			})();
		} else {
			number = number - 1;
		}

		const nextValue = wind + number;
		input.value = nextValue;
	};

	const onNextRound = (e: ButtonEvent) => {
		e.preventDefault();
		const input: HTMLInputElement =
			form.current!.querySelector("input#round")!;
		const currentRound = input.value.toString() || "";
		if (currentRound === "N4") {
			return;
		}

		let wind = currentRound[0] || "E";
		let number = parseInt(currentRound[1]) || -1;
		if (number === -1) {
			number = 1;
		} else if (number === 4) {
			number = 1;
			wind = (() => {
				switch (currentRound[0]) {
					case "E":
						return "S";
					case "S":
						return "W";
					default:
						return "N";
				}
			})();
		} else {
			number = number + 1;
		}

		const nextValue = wind + number;
		input.value = nextValue;
	};

	const getInputs = (e: ButtonEvent) => {
		e.preventDefault();
		return form.current!.querySelectorAll("input");
	};

	const onUpdate = (e: ButtonEvent) => {
		getInputs(e)!.forEach((input) => {
			const { id, value } = input;
			ls(id, value);
		});
	};

	const onClear = (e: ButtonEvent) => {
		getInputs(e)!.forEach((input) => {
			const { id } = input;
			if (id === "round") return;
			const value = id === "dora" ? "" : "0";
			ls(id, value);
			input.value = value;
		});
	};

	return (
		<form ref={form}>
			<div>
				<label htmlFor='round'>Round</label>
				<button onClick={onPrevRound}>{"<"}</button>
				<input id='round' />
				<button onClick={onNextRound}>{">"}</button>
			</div>
			<div>
				<label htmlFor='riichi'>Riichi</label>
				<input id='riichi' type='number' />
			</div>
			<div>
				<label htmlFor='honba'>Honba</label>
				<input id='honba' type='number' />
			</div>
			<div>
				<label htmlFor='dora'>Dora</label>
				<input id='dora' />
			</div>

			<button onClick={onUpdate}>Update</button>
			<button onClick={onClear}>Clear</button>
		</form>
	);
};
