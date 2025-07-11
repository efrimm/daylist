import fs from "node:fs";
import path from "node:path";

const DATA_FILE = path.join(import.meta.dirname, "data/tasks.json");

const loadTasks = function () {
  try {
    const tasks = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(tasks);
  } catch (err) {
    return [];
  }
};

const saveTasks = function (tasks) {
  const json = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(DATA_FILE, json, "utf8");
};

const listTasks = function () {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("📭 No tasks yet.");
    return;
  }

  console.log("📝 Tasks list:\n---");
  tasks.forEach((task, i) => {
    const index = i + 1;
    const status = task.done ? "[✔]" : "[ ]";
    console.log(`${index}. ${status} ${task.title}`);
  });
};

const addTask = function (title) {
  const tasks = loadTasks();

  saveTasks([...tasks, { title: title, done: false }]);

  listTasks();
  console.log(`---\n✅ Task added: "${title}"`);
};

const deleteTask = function (idx) {
  const tasks = loadTasks();
  const newTasks = tasks.filter((_, index) => index + 1 !== idx);
  if (tasks.length === newTasks.length) {
    listTasks();
    console.log(`---\n❌ Task with id #${idx} not found.`);
    return;
  }
  saveTasks(tasks);

  listTasks();
  console.log(`---\n🗑️ Task #${idx} deleted.`);
};

const doneTask = function (idx) {
  const tasks = loadTasks().map((task, index) =>
    index + 1 === idx ? { ...task, done: true } : task,
  );

  if (tasks.length < idx) {
    listTasks();
    console.log("---\n❌ Wrong id.");
    return;
  }

  saveTasks(tasks);

  listTasks();

  console.log(`---\n✅ Task #${idx} marked as done.`);
};

export default {
  loadTasks,
  saveTasks,
  addTask,
  listTasks,
  deleteTask,
  doneTask,
};
