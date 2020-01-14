"use strict";

import cookieconsent from "cookieconsent";

(function() {
  document.addEventListener("DOMContentLoaded", () => {});
  window.addEventListener("load", () => {
    // Cookie Consent
    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#333333"
        },
        button: {
          background: "#ffffff",
          text: "#333333"
        }
      }
    });
  });
})();
