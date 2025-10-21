export function parseInput(data: string): [string[], number] {
	let argv: string[] = [];
	// Gather argument values in a list
	let word = "";
	for (let i = 0; i < data.length; i++) {
		if ((data[i] === " " || data[i] == "\n") && word.length > 0) {
			argv.push(word);
			word = "";
		} else {
			word += data[i];
		}
	}
	// Count the argument values
	const argc = argv.length;
	return [argv, argc];
}
