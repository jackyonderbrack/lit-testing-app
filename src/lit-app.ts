import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {
    @property() API_URL: string = 'https://jsonplaceholder.typicode.com/todos';
    @property() data: Array<any> = []
    @property() showForm: boolean = false

    constructor() {
        super() 
        this.API_URL
        this.data
        this.showForm
        
    }

    render() {
        return html`
        <h1>Wyświetlanie listy z API:</h1>
        <p>${this.data}</p> 
        `;
    }

    static styles = css`
    `
}
