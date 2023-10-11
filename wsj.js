/ ==UserScript==
// @name            rm wsj bottom box
// @version         0.1
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @match         *://*.wsj.com/*
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
