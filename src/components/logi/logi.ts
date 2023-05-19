import { navigate } from "../../store/actions";
import { dispatch } from "../../store";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import styles from "./logi.css"

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
        const resp = await firebase.loginUser(credentials);
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

            const container = this.ownerDocument.createElement("section");


            const email = this.ownerDocument.createElement("input");
            email.placeholder = "email";
            email.type = "email";
            email.addEventListener(
              "change",
              (e: any) => (credentials.email = e.target.value)
            );
            container?.appendChild(email);

            const password = this.ownerDocument.createElement("input");
            password.placeholder = "password";
            password.type = "password";
            password.addEventListener(
              "change",
              (e: any) => (credentials.password = e.target.value)
            );

            container?.appendChild(password);

            const loginBtn = this.ownerDocument.createElement("button");
            loginBtn.innerText = "LogIn";
            loginBtn.addEventListener("click", this.LoginButton);
            container?.appendChild(loginBtn);

            this.shadowRoot?.appendChild(container)

            const css = this.ownerDocument.createElement("style");     
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}
customElements.define("my-login", login);