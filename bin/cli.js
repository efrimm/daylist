import taskManager from "./../taskManager.js";

// ANSI escape codes for styling
const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const CYAN = "\x1b[36m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

// Utility to pad command names for alignment
function pad(cmd, width = 15) {
  return cmd + " ".repeat(Math.max(0, width - cmd.length));
}

function showHelp() {
  console.log(`${BOLD}Usage:${RESET} daylist [command] <args>\n`);
  console.log(`${BOLD}Commands:${RESET}`);
  console.log(`  ${GREEN}${pad("list")} ${RESET}Display all tasks`);
  console.log(
    `  ${CYAN}${pad("add <title>")} ${RESET}Add a new task with the given title`,
  );
  console.log(
    `  ${YELLOW}${pad("delete <id>")} ${RESET}Delete the task with the specified ID`,
  );
  console.log(
    `  ${YELLOW}${pad("done <id>")} ${RESET}Mark the task with the specified ID as done`,
  );
  console.log(
    `\nRun ${BOLD}daylist <command> --help${RESET} for details on a command.`,
  );
}

const cli = (argv) => {
  const args = argv.slice(2);
  const command = args[0];
  const argument = args[1];

  switch (command) {
    case "list":
      taskManager.listTasks();
      break;
    case "add":
      if (argument) {
        taskManager.addTask(argument);
      } else {
        console.log("Title argument missing");
      }
      break;
    case "delete":
      if (argument) {
        taskManager.deleteTask(Number(argument));
      } else {
        console.log("Task ID argument missing");
      }

      break;
    case "done":
      if (argument) {
        taskManager.doneTask(Number(argument));
      } else {
        console.log("Task ID argument missing");
      }
      break;
    case "-h" || "--help":
      showHelp();
      break;
    default:
      showHelp();
      break;
  }
};

export default cli;
