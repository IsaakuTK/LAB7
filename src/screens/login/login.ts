
import "../../components/export";
export default class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }


  render() {
    const title = this.ownerDocument.createElement("h1");
    title.innerText = "Sign in :D";
    this.shadowRoot?.appendChild(title);

    const login = this.ownerDocument.createElement("my-login");
    this.shadowRoot?.appendChild(login);
  }
}

customElements.define("app-login", Login);
