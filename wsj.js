// ==UserScript==
// @name            rmwsj bottombox
// @version         1.0
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @license         MIT; https://gitlab.com/magnolia1234/bypass-paywalls-clean-filters/-/blob/main/LICENSE
// @match           *://*.com/*
// @match           *://*.co.uk/*
// @match           *://*.com.au/*
// @match           *://*.io/*
// @match           *://*.net/*
// @match           *://*.net.au/*
// @match           *://*.org/*
// @match           *://*.pub/*
// @match           *://*.businesspost.ie/*
// @match           *://*.europower.no/*
// @match           *://*.fiskeribladet.no/*
// @match           *://*.hindutamil.in/*
// @match           *://*.independent.ie/*
// @match           *://*.indiatoday.in/*
// @match           *://*.intrafish.no/*
// @match           *://*.ipolitics.ca/*
// @match           *://*.japantimes.co.jp/*
// @match           *://*.jgnt.co/*
// @match           *://*.livelaw.in/*
// @match           *://*.nautil.us/*
// @match           *://*.niagarafallsreview.ca/*
// @match           *://*.nzherald.co.nz/*
// @match           *://*.puck.news/*
// @match           *://*.sloanreview.mit.edu/*
// @match           *://*.stcatharinesstandard.ca/*
// @match           *://*.uxdesign.cc/*
// @match           *://*.wellandtribune.ca/*
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
