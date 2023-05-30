import { loadCss } from "../../utils/Main_styles";
import formstyle from "./formstyle.css"

const userinputs: recipe = {

    name: "",
    Ingredients:"0"
};


export default class form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, formstyle)


        const main_box = this.ownerDocument.createElement('section');
        main_box.classList.add("Main_box")
        this.shadowRoot?.appendChild(main_box);

        const second_box = this.ownerDocument.createElement('div');
        second_box.classList.add("second_box")
        main_box.appendChild(second_box);

        const h1 = this.ownerDocument.createElement('h1');
        h1.classList.add("h1")
        h1.textContent = ("recipe form")
        second_box.appendChild(h1);


        const label = this.ownerDocument.createElement('label');
        second_box.classList.add("label")
        label.textContent = ("name of recipe")
        second_box.appendChild(label);

        const name = this.ownerDocument.createElement('input');
        name.classList.add("input_1")
        name.addEventListener("change", (e: any) => {
            userinputs.name = e.target.value

        });
        second_box.appendChild(name);

        const label_2 = this.ownerDocument.createElement('label');
        second_box.classList.add("label_2")
        label_2.textContent = ("Ingredients")
        second_box.appendChild(label_2);

        const Ingredients = this.ownerDocument.createElement('input');
        Ingredients.classList.add("imput_2")
        Ingredients.addEventListener("change", (e: any) =>{
            userinputs.Ingredients = e.target.value
        })
        second_box.appendChild(Ingredients);

        const button = this.ownerDocument.createElement('button');
        button.textContent = ("Send")
        button.addEventListener ("click", async () =>{
            console.log(userinputs);
            dispatch( await saveRecipe(userinputs))

        });
        second_box.appendChild(button);
    }
    
}

customElements.define('app-form', form)