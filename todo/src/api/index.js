const table = new Map();
table.set(Math.random(), { content: "Buy Milk", completed: true });
table.set(Math.random(), { content: "World domination", completed: false });

export const todoApi = {
  todos: table,
  getAllTodos: async function () {
    return new Promise((resolve, reject) => {
      const list = [];
      for (const [key, val] of this.todos.entries()) {
        list.push({ key: key, ...val });
      }
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(list)));
      }, 500);
    });
  },
  addTodo: async function (todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!todo || !todo.content) {
          reject({ error: 'Content is empty' });
          return;
        }
        if (todo.content === "Error") {
          reject("You asked for error, here’s an error");
          return;
        }
        this.todos.set(todo.key, { content: todo, completed: todo })
        resolve({ addTodo: 'Success' });
      }, 500);
    });
  },
  modTodo: async function (key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const entry = this.todos.get(key);
        if (!entry) {
          reject({ error: 'Invalid key' });
          return;
        }
        entry.completed = !entry.completed;
        this.todos.set(key, entry);
        resolve({ modTodo: 'Success' });
      }, 500);
    });
  },
  delTodo: async function (key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const entry = this.todos.get(key);
        if (!entry) {
          reject({ error: 'Invalid key' });
          return;
        }
        this.todos.delete(key);
        resolve({ delTodo: 'Success' });
      }, 500);
    });
  },
};
