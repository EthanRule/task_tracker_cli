import { TaskTracker } from "./TaskTracker/task_tracker";
import { parseInput } from "./helpers/parse_input";
import { initializeJSON } from "./helpers/initialize_json";
import { isdigit } from "./helpers/isdigit";

function input(): void {
	process.stdout.write("task-cli ");
	process.stdin.once("data", (data) => {
		const [argv, argc] = parseInput(data.toString());
		switch (argv[0]) {
			case "add":
				taskTracker.addTask(argv[1]);
				break;
			case "update":
				if (isdigit(argv[1]) && argc === 3) {
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
						taskTracker.listDoneTasks();
						break;
					case "todo":
						taskTracker.listNotDoneTasks();
						break;
					case "in-progress":
						taskTracker.listInProgressTasks;
						break;
					default:
						taskTracker.listTasks();
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
