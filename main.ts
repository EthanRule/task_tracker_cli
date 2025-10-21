// Note: the current implementation of this project does heavy disk reads and writes. Idealy a program fetches the data, manipulates it,
// then saves on user exit to utilize the ram and cpu cache. But for the sake of practice, this program will be updating the json on disk.

import * as fs from "fs";

enum Progress {
	todo = "todo",
	inProgress = "in-progress",
	done = "done",
}

interface Task {
	// could break this into a class, but I dont think its worth.
	id: number;
	description: string;
	status: Progress;
	createdAt: string;
	updatedAt: string;
}

class TaskTracker {
	addTask(data: string): void {
		const task: Task = {
			id: generateUniqueId(),
			description: data,
			status: 'todo',
			createdAt: getTime(),
			updatedAt: getTime(),
		}
		fs.

	}

	updateTask(taskId: number, newTask: string): void {
		//TODO: args?
	}

	deleteTask(): void {}

	updateProgress(): void {}

	listTasks(): void {}

	listDoneTasks(): void {}

	listNotDoneTasks(): void {}

	listTasksInProgress(): void {}

	private genearteUniueId(): number {
		// Parse the currnet json for unique id

	}
}

function parseInput(data: string): [string[], number] {
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

function initializeJSON(): void {
	if (!fs.existsSync("db.json")) {
		fs.writeFile("db.json", "", "utf8", (err) => {
			if (err) {
				console.log(`Error creating file`);
			}
		});
	}
}

function isdigit(data: string): boolean {
	for (let i = 0; i < data.length; i++) {
		if (!/^\d$/.test(data[i])) {
			return false;
		}
	}
	return true;
}

function input(): void {
	process.stdout.write("task-cli ");
	process.stdin.once("data", (data) => {
		const [argv, argc] = parseInput(data.toString());
		switch (argv[0]) {
			case "add":
				taskTracker.addTask(argv[1]);
				break;
			case "update":
				if (isdigit(argv[1])) {
					taskTracker.updateTask(Number(argv[1]), argv[2]);
				}
				break;
			case "delete":
				break;
			case "mark-in-progress":
				break;
			case "mark-done":
				break;
			case "list":
				switch (argv[1]) {
					case "done":
						break;
					case "todo":
						break;
					case "in-progress":
						break;
					default:
						console.log("Invalid input. For a list of commands use the command: help");
				}
				break;
			case "quit":
				process.exit();
			case "exit":
				process.exit();
			default:
				console.log("Invalid input. For a list of commands use the command: help");
		}

		input();
	});
}

let taskTracker = new TaskTracker();
function main(): void {
	initializeJSON();
	input();
}

main();
// Tests

// Helper functions

function testParseInput() {}
