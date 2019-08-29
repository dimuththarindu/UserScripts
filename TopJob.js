// ==UserScript==
// @name         TopJob
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       DT
// @match        *://*.topjobs.lk/*
// @run-at       document-end
// @grant        none
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