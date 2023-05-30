import "./components/export"
import "./screens/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dasboard = this.ownerDocument.createElement('app-dasboard');
        this.shadowRoot?.appendChild(dasboard);

        
        const image = this.ownerDocument.createElement('app-image');
        this.shadowRoot?.appendChild(image);
}

    }   

customElements.define('app-container', AppContainer)