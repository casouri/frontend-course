import { todoApi } from './todoApis.js';

/*
Given an Api, implement a todo app(features includes Add a todo,
Change a todo Status, Delete Todo) in Vanilla JavaScript. FYI: You can
add some css styles you want.
*/

//implement your app here

const CLASS_COMPLETED = "completed";

function liIndex(li) {
  const parent = li.parentNode;
  return Array.from(parent.children).indexOf(li);
}

async function deleteTodo(event) {
  const li = event.target.parentNode;
  try {
    // This is screaming race condition, but oh well.
    await todoApi.delTodo(liIndex(li));
    const parent = li.parentNode;
    parent.removeChild(li);
  } catch (err) {
    console.log(`Failed to delete todo: ${err}`)
  }
}

async function toggleComplete(event) {
  const li = event.currentTarget;
  window.getSelection().removeAllRanges();
  try {
    await todoApi.modTodo(liIndex(li));
    li.classList.toggle(CLASS_COMPLETED);
  } catch (err) {
    console.log(`Failed to toggle todo: ${err}`)
  }
}

function makeTodoElement(todo) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("inline-button");
  button.onclick = deleteTodo;
  button.textContent = "Delete";
  li.textContent = todo.content;
  li.append(button);
  li.ondblclick = toggleComplete;
  if (todo.isCompleted) {
    li.classList.add(CLASS_COMPLETED);
  }
  return li;
}

async function addTodo(event) {
  const todoInput = document.querySelector("#todo-input");
  const todo = { content: todoInput.value, isCompleted: false };
  todoInput.value = "";
  try {
    await todoApi.addTodo(todo);
    const todoList = document.querySelector("#todo-list");
    todoList.append(makeTodoElement(todo));
  } catch (err) {
    console.log(`Failed to add todo: ${err}`)
  }
}

async function fillList() {
  const todoList = document.querySelector("#todo-list");
  try {
    const todos = await todoApi.getAllTodos()
    todoList.append(...todos.map(makeTodoElement));
  } catch {
    console.log("Failed to retrieve todos")
  }
}

function setup() {
  const addButton = document.querySelector("#add-button");
  addButton.onclick = addTodo;
  fillList();
}

onload = setup
