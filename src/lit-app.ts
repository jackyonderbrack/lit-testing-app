import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {

    @property() name = 'Lit App';

    render() {
        return html`<h1>Hello, ${this.name}</h1>`;
    }

    static styles = css`
    h1{
        color: red;
    }`
}
