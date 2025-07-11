```markdown
# DayList

A simple, dependency-free CLI task manager written in vanilla Node.js. Manage your daily tasks right from the terminal!

---

## Project Structure

```

.
├── bin
│   └── cli.js           # Executable CLI entry point
├── data
│   └── tasks.json       # Persistent task storage
├── index.js             # Library exports & setup
├── taskManager.js       # Core task management logic
├── package.json         # Project metadata & bin mapping
└── package-lock.json    # Locked dependency tree (empty here, no deps)

````

---

## Features

- 📋 List all tasks  
- ➕ Add new tasks  
- 🗑️ Delete tasks by ID  
- ✅ Mark tasks as done  
- 🎨 Colorized, easy-to-read help screen  
- 🔒 No external dependencies  

---

## Prerequisites

- [Node.js](https://nodejs.org/) v12 or higher  
- Unix-like shell (Bash, Zsh, etc.) or Windows WSL/PowerShell  

---

## Installation

1. **Clone or download** this repository:

   ```bash
   git clone https://github.com/yourusername/daylist.git
   cd daylist
````

2. **Install** (no dependencies to install, but register the CLI):

   ```bash
   npm link
   ```

   This will symlink the `daylist` command into your global `$PATH` based on the `bin` field in `package.json`.

3. **Verify**:

   ```bash
   which daylist
   # should point to your global npm bin directory
   ```

---

## Usage

```bash
daylist [command] <args>
```

Running `daylist` with no args (or with `-h`/`--help`) shows the help screen:

```bash
$ daylist
Usage: daylist [command] <args>

Commands:
  list           Display all tasks
  add <title>    Add a new task with the given title
  delete <id>    Delete the task with the specified ID
  done <id>      Mark the task with the specified ID as done

Run daylist <command> --help for details on a command.
```

### Commands

* **`daylist list`**
  Show all tasks (pending and completed).

* **`daylist add <title>`**
  Create a new task with the provided title.

* **`daylist delete <id>`**
  Remove the task with the given ID.

* **`daylist done <id>`**
  Mark the specified task as completed.

---

## Examples

```bash
$ daylist add "Call Mom"
✅ Added task: "Call Mom"

$ daylist list
1. [  ] Call Mom
2. [✔️] Walk the dog

$ daylist done 1
✅ Marked task #1 as done

$ daylist delete 2
🗑  Deleted task #2
```

---

## Data Storage

Tasks are persisted in JSON format at `data/tasks.json`. The file structure is:

```json
[
  { "title": "Buy groceries",  "done": false },
  { "title": "Walk the dog",   "done": true  },
  …
]
```

---

## Development

1. Clone the repo and `cd` into it.

2. Run `npm link` to make `daylist` available globally.

3. Edit `taskManager.js` or `bin/cli.js` as needed.

4. Test changes locally:

   ```bash
   daylist list
   daylist add "Test task"
   ```

5. Commit & push!

---

## Contributing

Feel free to open issues or submit pull requests. All contributions are welcome!

---

## License

This project is licensed under the [MIT License](LICENSE).


