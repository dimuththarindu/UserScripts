// ==UserScript==
// @name         Router Web
// @namespace    UserScripts
// @version      3.0
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
		var conStatus = 'unknown';
		
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
			conStatus = 'disconnected';
			funWrite2Doc(conStatus, noOfTries); // This fun has to be at the end
			document.getElementsByName('connect_chg')[0].click();
		}
		else
		{
			conStatus = 'connected';		
			funWrite2Doc(conStatus, noOfTries); // This fun has to be at the end
			localStorage.noOfTries = 0;
		}
    }
})();

function funWrite2Doc(conStatus, noOfTries)
{
	var docFragment = document.createDocumentFragment();
	
	var br1 = document.createElement("br");
	docFragment.appendChild(br1);

	var txt = document.createElement("p");
	docFragment.appendChild(txt);

	var txt_strong = document.createElement("b");
	txt_strong.append("Connection Summary");
	docFragment.appendChild(txt_strong);

	var constatus = document.createElement("p");
	constatus.append("Connection status: " + conStatus);
	docFragment.appendChild(constatus);

	var pNoOfTries = document.createElement("p");
	pNoOfTries.append("No of tries: " + noOfTries);
	docFragment.appendChild(pNoOfTries);
	
	var br2 = document.createElement("br");
	docFragment.appendChild(br2);

	var referenceNode = document.querySelector('#device_info');
	referenceNode.before(docFragment);
}