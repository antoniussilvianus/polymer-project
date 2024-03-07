import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView4 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .card {
          text-align: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
      </style>

        <div class="card">
          <h1>Your Messages</h1>
          <p>ini adalah pesan rahasia</p>
          <p>username dan password yang dimasukkan di login adalah admin-anton</p>
        </div>
    `;
  }

  static get properties() {
    return {
      isAdmin: {
        type: Boolean,
        value: false
      }
    };
  }
}

customElements.define('my-view4', MyView4);
