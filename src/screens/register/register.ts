
import "../../components/export";
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import styles from "./register.css"
export default class Register extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  nav() {
    dispatch(navigate(Screens.LOGIN));
  }


  render() {

    const all = this.ownerDocument.createElement("section");
    all.className="all"
    const title = this.ownerDocument.createElement("h1");
    title.innerText = "Register :D";
    all?.appendChild(title);

    const login = this.ownerDocument.createElement("my-register");
    all?.appendChild(login);

    const other = this.ownerDocument.createElement("button");
    other.innerText = "Already have account?";
    other.addEventListener("click", this.nav);
    all?.appendChild(other);

    this.shadowRoot?.appendChild(all)

    const css = this.ownerDocument.createElement("style");     
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
  }
}

customElements.define("app-register", Register);
