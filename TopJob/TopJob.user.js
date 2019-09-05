// ==UserScript==
// @name         TopJob
// @namespace    UserScripts
// @version      4.0
// @author       DT
// @description  TopJob Website User Experience
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Images/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @match        *://*.topjobs.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// @history      3.2 Added Image folder
// @history      3.1 Change support URL
// @history      3.0 Small changes to the script
// @history      2.0 Change the download & update URLs
// @history      1.0 Remove the right click restriction
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
    
    document.oncontextmenu = undefined;
})();
