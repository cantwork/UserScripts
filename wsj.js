// ==UserScript==
// @name            rmwsj bottombox
// @version         1.0
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @license         MIT; https://gitlab.com/magnolia1234/bypass-paywalls-clean-filters/-/blob/main/LICENSE
// @match           *://*.wsj.com/*
// @exclude         *://*.google.com/*
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
