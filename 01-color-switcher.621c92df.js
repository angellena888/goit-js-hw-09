!function(){var t=null,n=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");n.addEventListener("click",(function(){t||(n.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500))})),e.addEventListener("click",(function(){t&&(clearInterval(t),t=null,n.disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.621c92df.js.map