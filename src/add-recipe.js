/*
* Add Recipe View
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class AddRecipe extends PolymerElement {
  static get template() {
    return html`
      <div>
        <p>Add</p>
      </div>
    `;
  }
}

window.customElements.define('add-recipe', AddRecipe);
