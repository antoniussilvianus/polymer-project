import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
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
        <h1>Login Page</h1>
        <form on-submit="handleSubmit">
          <label>Username:</label>
          <input type="text" name="username" placeholder="username" value="{{username::input}}" required>
          <label>Password:</label>
          <input type="password" name="password" placeholder="password" value="{{password::input}}" required>
          <button type="submit">Login</button>
        </form>
      </div>
    `;
  }

  static get properties() {
    return {
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      },
      isAdmin: {
        type: Boolean,
        value: false
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.username === 'anton' && this.password === 'anton') {
      this.isAdmin = true;
      window.history.pushState({}, null, 'view3');
      window.dispatchEvent(new Event('location-changed'));
    } else {
      alert('Login Failed');
    }
  }
}

customElements.define('my-view2', MyView2);
