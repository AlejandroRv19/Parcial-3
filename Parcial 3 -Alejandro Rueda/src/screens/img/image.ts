class image extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const img = this.ownerDocument.createElement('img');
        img.src =  "https://www.hogarmania.com/archivos/202211/recetas-diabeticos-portada-1280x720x80xX.jpg"
        img.classList.add("img")
        this.shadowRoot?.appendChild(img);
    }
}

customElements.define('app-image', image)