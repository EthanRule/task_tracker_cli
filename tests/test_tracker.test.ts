import { TaskTracker, Progress } from "../app/TaskTracker/task_tracker";

let taskTracker: TaskTracker = new TaskTracker("tests/database/db.json");

// Teardown
afterEach(() => {
	taskTracker.clearTasks();
});

// Function addTask tests:
test("Adding task works", () => {
	taskTracker.addTask("test");
	expect(taskTracker.getTasks().size).toBe(1);
});

test("Adding task with only numbers", () => {
	taskTracker.addTask("123123");
	expect(taskTracker.getTasks().size).toBe(1);
});

test("Adding 3 tasks back to back", () => {
	taskTracker.addTask("task");
	taskTracker.addTask("task");
	taskTracker.addTask("task");
	expect(taskTracker.getTasks().size).toBe(3);
});

// Function updateTask tests:
test("Updating a task", () => {
	taskTracker.addTask("task");
	taskTracker.updateTask(1, "new task");
	expect(taskTracker.getTasks().get(1)?.description).toBe("new task");
});

test("Updating task that does not exist", () => {
	taskTracker.addTask("task");
	taskTracker.updateTask(0, "update");
	expect(taskTracker.getTasks().get(0)).toBeUndefined();
});

test("Updating a task 3 times in a row", () => {
	taskTracker.addTask("task");

	taskTracker.updateTask(1, "update");
	taskTracker.updateTask(1, "update2");
	taskTracker.updateTask(1, "update3");
	expect(taskTracker.getTasks().get(1)?.description).toBe("update3");
});

// Function deleteTask tests
test("Delete a task", () => {
	taskTracker.addTask("task");
	taskTracker.deleteTask(1);
	expect(taskTracker.getTasks().size).toBe(0);
});

test("Delete a task that does not exist", () => {
	taskTracker.addTask("task");
	taskTracker.deleteTask(0);
	expect(taskTracker.getTasks().size).toBe(1);
});

// Function updateProgress tests
test("Updating progress from todo to inProgress", () => {
	taskTracker.addTask("task");
	taskTracker.updateProgress(1);
	expect(taskTracker.getTasks().get(1)?.status).toBe(Progress.inProgress);
});

test("Updating task from inProgress to done", () => {
	taskTracker.addTask("task");
	taskTracker.updateProgress(1);
	taskTracker.updateProgress(1);
	expect(taskTracker.getTasks().get(1)?.status).toBe(Progress.done);
});

test("Updating task from todo to done", () => {
	taskTracker.addTask("task");
	taskTracker.updateProgress(1);
	taskTracker.updateProgress(1);
	expect(taskTracker.getTasks().get(1)?.status).toBe(Progress.done);
});

test("Updating task that does not exist", () => {
	taskTracker.addTask("task");
	taskTracker.updateProgress(0);
	expect(taskTracker.getTasks().get(1)?.status).toBe(Progress.todo);
});

test("Updating task that is already done", () => {
	taskTracker.addTask("task");
	taskTracker.updateProgress(1);
	taskTracker.updateProgress(1);
	taskTracker.updateProgress(1);
	expect(taskTracker.getTasks().get(1)?.status).toBe(Progress.done);
});

// Function saveTasks tests:
test("Saving tasks are retreivable")
