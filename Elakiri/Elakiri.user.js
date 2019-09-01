// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      1.0
// @author       DT
// @description  Clean Elakiri
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/TopJob.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @include      *://*.elakiri.com/*
// @include      *://*.elakiri.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==



(function() {
    'use strict';
	
	// New Design
	funNewDesign();
	
	// Downloads
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[4]');
	
	// ElaKiri Exclusive!
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[1]');
	
	// Checkout!
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[3]/div[2]');
	
	// Current Poll
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/form[2]');
	
	// ElaKiri Events!
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/div[4]');
	
	// Site Navigation
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/div[1]');
	
	// Navbar Downloads
	funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[2]');
	
	// Navbar FAQ
	funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[2]');
	
	// Navbar Contact Us
	funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[8]');
	
	// Copyright bar
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/div[9]');
	
	// Page generated 
	funRemoveElement('/html/body/center');
})();

function funNewDesign() {
    var css = ".page, table, tbody, .bginput, select, td, .header_box, .postbit_box, .panel, .vBulletin_editor, .button, center { background: black !important; border-color: #4B515D !important;} .thead { background: #2E2E2E !important;} .alt1, .alt2 { background: #212121 !important;} .navbar, .vbmenu_control, .tfoot, .tcat { background: #01579b !important;} strong, a, .alt1, .alt2, .time, .smallfont, select, .postbit_box, label, .button { color: #F5F5F5 !important; }"
	
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);

	var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[1]/td/a/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	element.id = 'ElakiriInjectLogo';
	document.getElementById("ElakiriInjectLogo").src = "https://i.ibb.co/Pzm9TQ9/310.png"; 
}

function funRemoveElement(pathValue) {
    let element;
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.parentNode.removeChild(element);
}

function funRemoveStyle(pathValue) {
    let element;
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.removeAttribute("style");
}

