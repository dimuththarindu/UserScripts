// ==UserScript==
// @name         TopJob
// @namespace    UserScripts
// @version      3.1
// @history      3.0 Small changes to the script
// @history      2.0 Change the download & update URLs
// @history      1.0 Remove the right click restriction
// @history      0.1 Remove 'overflow-y: auto;height: 583px'
// @description  Sri Lanka Telecom - Data Usage
// @author       DT
// @match        *://*.topjobs.lk/*
// @run-at       document-end
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// @updateURL    https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// ==/UserScript==

// ==UserScript==
// @name         TopJob
// @namespace    UserScripts
// @version      3.1
// @author       DT
// @description  Sri Lanka Telecom - Data Usage
// @source		 https://github.com/dimuththarindu/UserScripts
// @icon 		 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/LK-SLT-Usage/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/LK-SLT-Usage/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/LK-SLT-Usage/LK-SLT-Usage.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/LK-SLT-Usage/LK-SLT-Usage.js
// @supportURL   https://github.com/dimuththarindu/UserScripts
// @match 		 *://*.internetvas.slt.lk/SLTVasPortal-war/application/home.nable
// @run-at		 document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// @history      5.7.2 Small changes to the script
// @history      5.7.1 Change the download & update URLs
// @history      5.7.0 Firefox Extension Script
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
