import { LitElement, html, css } from "lit-element";
import "@stoxy/form";

export default class TodoAdd extends LitElement {
  render() {
    return html`
      <stoxy-form
        key="todos"
        action="add"
        @submit=${() => {
          this.shadowRoot.querySelector("input").value = "";
        }}
      >
        <input
          type="text"
          name="task"
          placeholder="add todo ..."
          autocomplete="off"
        />
        <input type="submit" value="PUSH" />
      </stoxy-form>
    `;
  }

  static get styles() {
    return css`
      input[type="text"] {
        background: transparent;
        font-size: 24px;
        color: #fff;
        border: 4px solid #fff;
      }
      input[type="submit"] {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        background: transparent;
        border: 4px solid #fff;
        cursor: pointer;
      }

      input::placeholder,
      input::-webkit-input-placeholder {
        color: #fff;
      }
    `;
  }
}

if (!customElements.get("todo-adder")) {
  customElements.define("todo-adder", TodoAdd);
}
