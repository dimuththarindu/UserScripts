// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      5.0
// @author       DT
// @description  Custom Elakiri Design
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
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
funMain();

function funMain() {
	try {
		// This script only works in EK-Lite design
		if(funGetCookie("bbstyleid") !== 7) {
			funNewDesign();

			// Since the home page and user home page are different,
			// some features may not be properly deleted if the user is not logged in.
			// Therefore, the elements are removed only when the user logs in.

			// If the user is logged in, then there is no register link in the navbar.
			var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/a/text()', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;	

			// Check whether value is null or not
			if(element) {
				element = element.data.toString();

				// Check register link
				if(!element.includes("Register")) {
					// If the element is removed when the member profile is opened,
					// the profile page will not be formatted properly.
					// Example: http://www.elakiri.com/forum/member.php?u=1
					// Also, while in the search page, the elements cannot be removed.
					// Therefore, works only when the homepage is opened.
					if ((window.location.href == "http://www.elakiri.com/") ||
					 (window.location.href == "https://www.elakiri.com/") ||
					 (window.location.href == "http://www.elakiri.lk/") ||
					 (window.location.href == "https://www.elakiri.lk/")) {
						funRemoveAllElements();
					}
				}
			}
		}
	}
	catch(err) {
		console.log("Error: " + err);
	}
}

// This can be used to get the selected style
function funGetCookie(name) {
    let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
    return a ? a[1] : '';
}

function funNewDesign() {
	// Replace Elakiri logo
	funReplaceMainBanner();

    var css = "";

	// Global
	// Set background (black) and border color
    css += "body, .page, table.page, select, .header_box, .bginput, .button, .header_box_guest {background: black !important; border-color: #0c0c0c !important;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black; border-color: #0c0c0c;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black; border-color: #0c0c0c;}";

	css += ".panelsurround, .panelsurround .panel{background: #141414; border-color: #0c0c0c;}";

	css += ".vbmenu_popup, .vbmenu_option_alink {background: #141414;}";

	css += "#collapseobj_usercp_reputation .alt1Active {background: #141414;}";

	css += ".postbit_box {background: #141414; border-color: #0c0c0c;}";

	css += "#threadslist .subscribed {background: #141414;}";

	css += ".thead {background: #2E2E2E !important;}";

	css += "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) {background: black;}";

	css += ".tborder {background: #2E2E2E; border-color: #0c0c0c;}";

	css += "#visitor_messaging, #link_bar, #stats_mini, #friends_mini, #visitors {background: black; border-color: #0c0c0c; }";

	css += ".alt1, .alt2{background: #141414 !important; border-color: #0c0c0c !important;}";

	// Set hr color
	css += ".alt1 .hr {background: #141414;}";

	css += ".navbar, .vbmenu_control, .tfoot, .tcat{background: #01579b !important;}";

	css += ".vBulletin_editor, .vBulletin_editor td{background: #e0e0e0 !important;}";

	css += "#vB_Editor_001_smiliebox table tbody tr td, #vB_Editor_001_smiliebox table tbody tr td a {color: #141414 !important;}";

	// Fix image width
	css += ".vb_postbit > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2) > img:nth-child(1) {max-width: 100%;}";
	css += "div#posts div div.page div div div table.tborder tbody tr td div.vb_postbit img {max-width: 100%;}";
	css += "form div table.tborder tbody tr td div.vb_postbit img {max-width: 100%;}";
	//css += "img {max-width: 100%;}";
	// ^ Error: Effect vB_Editor_QR_controls

	// Global
	// Set light black #141414
	css += ".poll, .alt1Active, #navbar_search_menu .vbmenu_option {background: #141414;}";

	// Global
	// Set border color
	css += ".statistics_group, #collapseobj_contactinfo div fieldset {border-color: #0c0c0c;}";

	// Global
	// Text White
	css += ".panel, strong, a, .alt1, .alt1 div, .alt2, .time, .smallfont, select, .postbit_box, label, .button, h1, h2, h3, h4, h5, h6, .poll {color: #F5F5F5 !important;}";

    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

function funReplaceMainBanner() {
    var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[1]/td/a/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	// In some pages, Elakiri logo is not displayed.
	// Example: http://www.elakiri.com/forum/showpost.php?p=24722077&postcount=1
	if((element) && (element.src)) {
		element.src = "https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Logo.png";
	}
}

function funRemoveAllElements() {
	// Downloads
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[4]');

	// ElaKiri Exclusive!
	//funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[1]');

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