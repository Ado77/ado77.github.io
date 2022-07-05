import { LitElement, html } from "https://cdn.skypack.dev/lit";
import { until } from "https://cdn.skypack.dev/lit-html/directives/until.js";

// Working imports
// import { LitElement, html } from "https://jspm.dev/lit-element";
// import { until } from "https://jspm.dev/lit-html/directives/until.js";

function example() {
  return new Promise((a, r) => {
    setTimeout(() => a("World"), 1000);
  });
}

class MyElement extends LitElement {
  render() {
    return html`Hello ${until(example(), "Loading ...")}!`;
  }
}

customElements.define("my-element", MyElement);
