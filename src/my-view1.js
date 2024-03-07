import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "./shared-styles.js";

class MyView1 extends PolymerElement {
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
        .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          font-size: 24px;
          line-height: 50px;
          margin: 0 auto 10px auto;
        }
        input[type="text"],
        input[type="password"],
        select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button[type="submit"] {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button[type="submit"]:hover {
          background-color: #0056b3;
        }
      </style>

      <div class="card">
        <h1>Data Mahasiswa Lepkom</h1>
        <template is="dom-repeat" items="[[data]]">
          <img src="[[item.foto_mahasiswa]]" alt="Lepkom" width="150">
          <p>Nama : [[item.nama_mahasiswa]]</p>
          <p>NIM : [[item.nim_mahasiswa]]</p>
        </template>
      </div>

      <iron-ajax
        auto
        url="/api/mahasiswa"
        handle-as="json"
        method="get"
        on-response="_handleResponse"
        debounce-duration="300"
      >
      </iron-ajax>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Array,
        value: []
      }
    };
  }

  _handleResponse(e) {
    this.data = e.detail.response;
  }
}

customElements.define("my-view1", MyView1);
