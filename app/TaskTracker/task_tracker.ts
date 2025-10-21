import * as fs from "fs";
enum Progress {
	todo = "todo",
	inProgress = "in-progress",
	done = "done",
}

interface Task {
	id: number;
	description: string;
	status: Progress;
	createdAt: string;
	updatedAt: string;
}

export class TaskTracker {
	private tasks: Task[];

	constructor() {
		if (fs.existsSync("app/database/db.json") && fs.readFileSync("app/database/db.json", "utf-8")) {
			this.tasks = JSON.parse(fs.readFileSync("app/database/db.json", "utf-8"));
		} else {
			this.tasks = [];
		}
	}

	addTask(data: string): void {
		const task: Task = {
			id: this.generateUniqueId(),
			description: data,
			status: Progress.todo,
			createdAt: Date(),
			updatedAt: Date(),
		};
		this.tasks.push(task);
		console.log(`Task added successfully (ID: ${task.id})`);
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

	private generateUniqueId(): number {
		if (this.tasks.length == 0) {
			return 0;
		}
		return this.tasks[this.tasks.length - 1].id + 1;
	}

	private saveTasks(): void {}
}
