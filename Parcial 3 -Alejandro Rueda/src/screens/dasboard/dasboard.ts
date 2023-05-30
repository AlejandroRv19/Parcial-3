
export default class dasboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        const main_box = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(main_box);

        const second_box = this.ownerDocument.createElement('div');
        main_box.appendChild(second_box);

        const form = this.ownerDocument.createElement('app-form');
        main_box.appendChild(form);

        const Product = this.ownerDocument.createElement('app-product');
        main_box.appendChild(Product);





       
    }
    
}

customElements.define('app-dasboard', dasboard)