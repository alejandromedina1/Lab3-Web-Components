class todoItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.description = this.getAttribute('description')
        this.finished = this.getAttribute('finished')
    }
    static get observedAttributes() {
        return ['description', 'finished']
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href= "/src/components/todoComponent/style.css">
        <div class = "item">
            <input type ="checkbox" class ="to-do-checkbox"> 
            <p> ${this.description}</p>
        </div> 
        `
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }
}

customElements.define('to-do-item', todoItem)
export default todoItem