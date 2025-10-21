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
	private tasks: Map<number, Task> = new Map();

	constructor() {
		if (fs.existsSync("app/database/db.json") && fs.readFileSync("app/database/db.json", "utf-8")) {
			const data = JSON.parse(fs.readFileSync("app/database/db.json", "utf-8"));
			data.forEach((task) => {
				this.tasks.set(task.id, task);
			});
		} else {
			this.tasks = new Map();
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
		this.tasks.set(task.id, task);
		console.log(`Task added successfully (ID: ${task.id})`);
	}

	updateTask(taskId: number, newTask: string): void {
		const task = this.tasks.get(taskId);
		if (task) {
			task.description = newTask;
			task.updatedAt = Date();
		}
	}

	deleteTask(taskId: number): void {
		this.tasks.delete(taskId);
	}

	updateProgress(taskId: number): void {
		const task = this.tasks.get(taskId);
		if (task) {
			switch (task.status) {
				case Progress.todo:
					task.status = Progress.inProgress;
					break;
				case Progress.inProgress:
					task.status = Progress.done;
					break;
				default:
					task.status = Progress.done;
			}
			task.updatedAt = Date();
		}
	}

	listTasks(): void {
		console.log("Tasks\nid, status, desc");
		for (const task of this.tasks.values()) {
			console.log(task.id, task.status, task.description);
		}
	}

	listDoneTasks(): void {
		console.log("Done Tasks\nid, desc, updatedAt");
		for (const task of this.tasks.values()) {
			if (task.status === Progress.done) {
				console.log(task.id, task.description, task.updatedAt);
			}
		}
	}

	listNotDoneTasks(): void {
		console.log("Not Done Tasks\nid, status, desc, updatedAt");
		for (const task of this.tasks.values()) {
			if (task.status !== Progress.done) {
				console.log(task.id, task.status, task.description, task.updatedAt);
			}
		}
	}

	listInProgressTasks(): void {
		console.log("In-Progress Tasks\nid, desc, updatedAt");
		for (const task of this.tasks.values()) {
			if (task.status === Progress.inProgress) {
				console.log(task.id, task.description, task.updatedAt);
			}
		}
	}

	private generateUniqueId(): number {
		let maxId = 0;
		for (const task of this.tasks.values()) {
			maxId = Math.max(maxId, task.id);
		}
		return maxId + 1;
	}

	private saveTasks(): void {}
}
