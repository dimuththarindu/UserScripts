// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      2.3
// @author       DT
// @description  Clean Elakiri
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @match        *://*.elakiri.com/*
// @include      *://*.elakiri.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==


'use strict';

// Works only when certain criteria are met
try {
	var element;

	// Check selected theme. Only work for EK Lite theme
	element = document.evaluate('/html/body/table/tbody/tr/td/form/table/tbody/tr/td[1]/select/optgroup/option[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	// This custom design doesn't work with the EK Main theme
	if (element.selected) {
		// Apply New Design
		funNewDesign();
		
		element = (document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/a/text()', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).data.toString();	

		// Check login status
		// Homepage and user Homepage are different
		if(!element.includes("Register")){
			
			if (window.location.href.indexOf("/forum/member.php?u=") < 1) {
				funRemoveAllElements();
			}			
		}	
	}
	
	
	
}
catch(err) {
	console.log("Error: " + err);
}

function funNewDesign() {
    var css = "";

    css += "html, body, .page, table.page, select, .header_box, .bginput, .button {background: black !important; border-color: #4B515D !important;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black; border-color: #4B515D;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black; border-color: #4B515D;}";

	css += ".panelsurround, .panelsurround .panel{background: #212121; border-color: #4B515D;}";
		
	css += ".vbmenu_popup, .vbmenu_option_alink {background: #212121;}";
	
	css += "#collapseobj_usercp_reputation .alt1Active {background: #212121;}";

	css += ".postbit_box {background: #212121;}";

	css += ".thead {background: #2E2E2E !important;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black;}";

	css += ".tborder {background: #2E2E2E; border-color: #4B515D;}";

	css += "#visitor_messaging, #link_bar, #stats_mini, #friends_mini, #visitors {background: black; border-color: #4B515D; }";

	css += ".alt1, .alt2{background: #212121 !important; border-color: #4B515D !important;}";

	css += ".navbar, .vbmenu_control, .tfoot, .tcat{background: #01579b !important;}";

	css += ".vBulletin_editor, .vBulletin_editor td{background: #e0e0e0 !important;}";

	css += "strong, a, .alt1, .alt1 div, .alt2, .time, .smallfont, select, .postbit_box, label, .button, h1, h2, h3, h4, h5, h6 {color: #F5F5F5 !important;}";

    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[1]/td/a/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.src = "https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Logo.png";
}

function funRemoveAllElements() {
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

	// Posting Rules / Sub Thread
	funRemoveElement('/html/body/table/tbody/tr/td/div[3]/div/div/table[5]');

	// Bookmarks / Sub Thread
	funRemoveElement('/html/body/table/tbody/tr/td/div[3]/div/div/table[2]');

	// Page generated
	funRemoveElement('/html/body/center');
}

function funRemoveElement(pathValue) {
    var element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	if(element) {
		element.parentNode.removeChild(element);
	}
}

/*
function funRemoveStyle(pathValue) {
    var element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.removeAttribute("style");
}
*/