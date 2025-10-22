import { TaskTracker } from "../app/TaskTracker/task_tracker";

let taskTracker: TaskTracker = new TaskTracker("tests/database/db.json");

// Function addTask tests:

// Normal
test("Adding task works", () => {
	taskTracker.addTask("test");
	expect(taskTracker.getTasks().size).toBe(1);
});

// Edge

// Abnormal/Exception
