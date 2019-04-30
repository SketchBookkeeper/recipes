/*
* Add Recipe View
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class TopBar extends PolymerElement {
  static get properties () {
    return {
      name: {
        type: String
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="node_modules/@material/top-app-bar/dist/mdc.top-app-bar.min.css">

      <style include="shared-styles">
      </style>

      <script src="node_modules/@material/top-app-bar/dist/mdc.topAppBar.min.js"></script>

      <script>
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(topAppBarElement);
      </script>

      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__title">[[name]]</span>
          </section>
        </div>
      </header>
    `;
  }
}

window.customElements.define('top-bar', TopBar);
