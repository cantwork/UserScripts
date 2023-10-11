/ ==UserScript==
// @name            rm wsj bottom box
// @version         0.1
// @downloadURL     https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @updateURL       https://raw.githubusercontent.com/cantwork/UserScripts/main/wsj.js
// @exclude         *://*.wsj.com/*
// ==/UserScript==

(function() {
  'use strict';
  // 创建一个新的<style>元素
  var styleElement = document.createElement('style');
  
  // 将样式规则添加到<style>元素中
  styleElement.innerHTML = `
    #cx-candybar {
      display: none!important;
      height: 0!important;
    }
  `;
  
  // 将<style>元素添加到文档的<head>部分
  document.head.appendChild(styleElement);
  
  // 创建一个<div>元素，并为其添加类名
  var divElement = document.createElement('div');
  divElement.className = 'my-class';
  divElement.textContent = '这是一个带有动态样式的元素';
  
  // 将<div>元素添加到文档的<body>部分
  document.body.appendChild(divElement);

})
