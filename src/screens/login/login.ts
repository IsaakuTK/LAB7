
import "../../components/export";
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
export default class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  nav() {
    dispatch(navigate(Screens.REGISTER));
  }



  render() {
    const title = this.ownerDocument.createElement("h1");
    title.innerText = "Sign in :D";
    this.shadowRoot?.appendChild(title);

    const login = this.ownerDocument.createElement("my-login");
    this.shadowRoot?.appendChild(login);

    const other = this.ownerDocument.createElement("button");
    other.innerText = "No have a account?";
    other.addEventListener("click", this.nav);
    this.shadowRoot?.appendChild(other);
  }
}

customElements.define("app-login", Login);
