import { LitElement, html, css } from "lit-element";
import "./TodoAdd";
import "./TodoEntry";
import "@stoxy/repeat";
import "@stoxy/string";
import { clear, sub, write, persistKey, update } from "@stoxy/core";

export default class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    persistKey("todos", "todocount");
  }

  firstUpdated() {
    sub("todos", this.todosChangeCallback.bind(this));
  }

  todosChangeCallback(e) {
    write("todocount", e && e.data ? e.data.length : 0);
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        padding-top: 2rem;
      }
      todo-adder {
        margin-bottom: 3rem;
      }
      stoxy-repeat {
        width: 65%;
      }
      .clear-task {
        font-size: 24px;
        color: rgb(255, 255, 255);
        background: transparent;
        border: 2px solid rgb(255, 255, 255);
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <h1>Lit Todo App</h1>
      <todo-adder></todo-adder>
      <stoxy-repeat key="todos" id="todoTask">
        <todo-entry task="todoTask.task"></todo-entry>
      </stoxy-repeat>
      <p>Task List: <stoxy-string default="No Task added">todocount</stoxy-string></p>
      <button class='clear-task'>Clear Tasks</button>
    `;
  }
}
