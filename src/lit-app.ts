import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {
    @property() API_URL: string = 'http://192.168.0.156:8001/matches';
    @property() matches: any = [];


    constructor() {
        super()
    }

   async connectedCallback() {
    super.connectedCallback()
    const response = await fetch(this.API_URL);
    const data = await response.json();
    this.matches = data
   }

   getDecimal(number: number) {
       return number.toFixed(2)
   }

   getDate(date: string) {
    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString('default', { month: "2-digit" });
    const year = new Date(date).getFullYear();
    const hour = new Date(date).getHours();
    const minute = new Date(date).getMinutes().toString().padStart(2, '0');
    return `${day}-${month}-${year}, godz:${hour}:${minute}`;
   }

    render() {
        return html`
        <h1>Wyświetlanie listy z API:</h1>
        <ul>${this.matches.map((item: any) => (html`
        
        <li key=${item.match_id} class="signle-match">
            
            <div class="single-match-info">
                <p>${item.home_team} - ${item.away_team}</p>
                <span>${this.getDate(item.date)}</span>
            </div>
            <div class="single-match-buttons">
                <button class="odd-single-button">${this.getDecimal(item.odds.home_win)}</button>
                <button class="odd-single-button">${this.getDecimal(item.odds.draw)}</button>
                <button class="odd-single-button">${this.getDecimal(item.odds.away_win)}</button>
            </div>
        </li>
        `))}</ul> 
        `;
    }

    static styles = css`
    .signle-match {
        display: grid;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin: 1rem;
        padding: 1.5rem;
    }

    .signle-match-info {
        grid-column: 1;
        flex-direction: column
    }

    .single-match-buttons {
        grid-column: 2;
        display: flex;
        justify-content: center;
        align-items: center;

}
    `
}
