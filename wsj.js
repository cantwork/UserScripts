// ==UserScript==
// @name            rmwsj bottombox
// @version         1.0
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @license         MIT
// @match           *://*.com/*
// @match           *://*.wsj.com/*
// ==/UserScript==

(function() {
  'use strict';
  var styleElement = document.createElement('style');
  
  styleElement.innerHTML = `
    #cx-candybar {
      display: none!important;
      height: 0!important;
    }
  `;
  
  document.head.appendChild(styleElement);

})();
