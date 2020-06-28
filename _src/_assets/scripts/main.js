"use strict";

import netlifyIdentity from "netlify-identity-widget";
import cookieconsent from "cookieconsent";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Netlify Auth
    netlifyIdentity.init();

    // Gutter Toggles
    const gutterToggles = [...document.querySelectorAll(".js_gutter-toggle")];
    gutterToggles.forEach(gutterToggle => {
      var targetGutter = document.querySelector(
        ".c_gutter#" + gutterToggle.getAttribute("data-target")
      );
      gutterToggle.addEventListener("click", event => {
        event.preventDefault();
        targetGutter.classList.toggle("--reveal");
      });
    });

    // Gutters Auto Close
    const gutters = [...document.querySelectorAll(".c_gutter")];
    gutters.forEach(gutter => {
      gutter.addEventListener("mouseleave", () => {
        gutter.classList.remove("--reveal");
      });
    });
  });

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
