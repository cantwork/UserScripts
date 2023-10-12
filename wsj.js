// ==UserScript==
// @name            rmwsj bottombox
// @version         1.0
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @match           *://*.wsj.com/*
// @exclude         *://*.google.com/*
// ==/UserScript==

(function() {
  'use strict';
  var styleElement = document.createElement('style');
  
  styleElement.innerHTML = `
    #cx-candybar,amp-subscriptions-dialog,.login-section-container {
      display: none!important;
      height: 0!important;
    }
  `;
  
  document.head.appendChild(styleElement);

})();
