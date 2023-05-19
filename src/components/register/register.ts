import { navigate } from "../../store/actions";
import { dispatch } from "../../store";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import styles from "./register.css"

const credentials = { email: "", password: "" };

export default class login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
      }


      async LoginButton() {
        const resp = await firebase.registerUser(credentials);
        if (resp) {
          dispatch(navigate(Screens.DASHBOARD));
        } else {
          alert("Cometiste un error");
        }
        console.log(resp);
      }

      render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``;
            const email = this.ownerDocument.createElement("input");
    email.placeholder = "email";
    email.type = "email";
    email.addEventListener(
      "change",
      (e: any) => (credentials.email = e.target.value)
    );
    this.shadowRoot?.appendChild(email);

    const password = this.ownerDocument.createElement("input");
    password.placeholder = "password";
    password.type = "password";
    password.addEventListener(
      "change",
      (e: any) => (credentials.password = e.target.value)
    );
    this.shadowRoot?.appendChild(password);

    const loginBtn = this.ownerDocument.createElement("button");
    loginBtn.innerText = "Register";
    loginBtn.addEventListener("click", this.LoginButton);
    this.shadowRoot?.appendChild(loginBtn);


    const css = this.ownerDocument.createElement("style");     
    css.innerHTML = styles;
    this.shadowRoot?.appendChild(css);

        }
    }
}
customElements.define("my-register", login);