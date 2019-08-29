// ==UserScript==
// @name         TopJob
// @namespace    http://tampermonkey.net/
// @version      1.0
// @history      0.1 Remove 'overflow-y: auto;height: 583px'
// @description  Sri Lanka Telecom - Data Usage
// @author       DT
// @match        *://*.topjobs.lk/*
// @run-at       document-end
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob.js
// @updateURL    https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob.js
// ==/UserScript==

(function() {
    'use strict';

    var pathValue = "";
    var element = "";

    pathValue = '/html/body/div[9]/div';
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.removeAttribute("style");

    pathValue = '//*[@id="header"]';
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.parentNode.removeChild(element);

    pathValue = '//*[@id="redBG"]';
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.parentNode.removeChild(element);
})();