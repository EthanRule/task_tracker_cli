import * as fs from "fs";

export function initializeJSON(file: string): void {
	if (!fs.existsSync(file)) {
		fs.writeFile(file, "[]", "utf8", (err) => {
			if (err) {
				console.log(`Error creating file`);
			}
		});
	}
}
