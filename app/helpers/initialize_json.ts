import * as fs from "fs";

export function initializeJSON(): void {
	if (!fs.existsSync("app/database/db.json")) {
		fs.writeFile("app/database/db.json", "[]", "utf8", (err) => {
			if (err) {
				console.log(`Error creating file`);
			}
		});
	}
}
