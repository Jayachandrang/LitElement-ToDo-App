import TodoApp from "./TodoApp.js";

if (customElements.get("todo-app")) {
    window.location.reload();
  } else {
    customElements.define("todo-app", TodoApp);
  }