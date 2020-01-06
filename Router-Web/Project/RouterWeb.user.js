// ==UserScript==
// @name         Router Web
// @namespace    UserScripts
// @version      2.1
// @author       DT
// @description  Custom Scripts
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Router-Web/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Router-Web/Images/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Router-Web/Project/RouterWeb.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Router-Web/Project/RouterWeb.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @match        *://192.168.1.1/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href == "http://192.168.1.1/")
    {
        window.location.pathname = "/index.htm";
    }

    if (window.location.href == "http://192.168.1.1/status.htm")
    {
		var key = 'NoOfTries';
		var noOfTries = 0;
		
		noOfTries = +localStorage.noOfTries;
		
		if(!Number.isInteger(noOfTries))
		{
			noOfTries = 0;
		}
		
        noOfTries = noOfTries + 1;			
		localStorage.noOfTries = noOfTries;
		
		console.log("Job Status: " + noOfTries);
		document.title = "Job Status: " + noOfTries;

		if(document.getElementsByName('connect_chg')[0].value == "connect")
		{
			document.getElementsByName('connect_chg')[0].click();
		}
		else
		{
			localStorage.noOfTries = 0;
		}
    }
})();