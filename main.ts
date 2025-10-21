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
	addTask(task: Task): void {}

	updateTask(): void {
		//TODO: args?
	}

	deleteTask(): void {}

	updateProgress(): void {}

	listTasks(): void {}

	listDoneTasks(): void {}

	listNotDoneTasks(): void {}

	listTasksInProgress(): void {}
}

function parseInput(data: string): [string[], number] {
	let argv: string[] = [];
	// Gather argument values in a list
	let word = "";
	for (let i = 0; i < data.length; i++) {
		console.log(data[i]);
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

function main(): void {
	process.stdout.write("task-cli ");
	process.stdin.once("data", (data) => {
		const [argv, argc] = parseInput(data.toString());

        
		main();
	});
}

main();
