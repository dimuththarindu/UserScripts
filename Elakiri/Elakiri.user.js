// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      7.7
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

			if ((window.location.href == "http://www.elakiri.com/") ||
			   (window.location.href == "https://www.elakiri.com/") ||
			   (window.location.href == "http://www.elakiri.lk/") ||
			   (window.location.href == "https://www.elakiri.lk/")) {

				// Guess home page and user home page are different
				// If the user is logged in, then there is no register link in the navbar.
				var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[1]/a/text()', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

				// Check whether value is null or not
				if(element) {
					element = element.data.toString();

					// Check register link
					if(element.includes("Register")) {
						funRemEleHomeGuess();
					} else if(element.includes("User CP")) {
						funRemEleHomeUser();
					}
				}
			}
		}
		
		// Remove scrollbar in register page
		if ((window.location.href == "http://www.elakiri.com/forum/register.php") ||
		   (window.location.href == "https://www.elakiri.com/forum/register.php") ||
		   (window.location.href == "http://www.elakiri.lk/forum/register.php") ||
		   (window.location.href == "https://www.elakiri.lk/forum/register.php")) {
			funRemoveStyle('/html/body/table/tbody/tr/td/div/div/div/form/table/tbody/tr[2]/td/div[1]/div/fieldset/table/tbody/tr[2]/td/div[1]');
		}
	}
	catch(err) {
		console.log("Error: " + err);
	}
}

function funNewDesign() {
	// Replace Elakiri logo
	funReplaceMainBanner();

	// HTML Colors
	// - https://mdbootstrap.com/docs/jquery/css/colors/
	// - https://htmlcolorcodes.com/
    var css = "";

	// Global
	// Set background (black) and border color
    css += "body, .page, table.page, select, .header_box, .header_box_guest, .sticky {background: black !important; border-color: #0c0c0c !important;}";

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
	
	// User Reputation image
	css += "td.alt2 table tbody tr td div span img.inlineimg {width: 7px; border: 1px solid #000; opacity: 0.6; filter: alpha(opacity=50); /* For IE8 and earlier */}";
	// User Reputation image: Positive
	//css += "td.alt2 table tbody tr td div span img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_pos.gif'] {background-color: blue;}";
	//css += "td.alt2 table tbody tr td div span img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_highpos.gif'] {background-color: blue;}";
	// User Reputation image: Negative
	//css += "td.alt2 table tbody tr td div span img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_neg.gif'] {background-color: red;}";
	//css += "td.alt2 table tbody tr td div span img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_highneg.gif'] {background-color: red;}";
	
	// Usercp Reputation
	// Reputation: Positive
	//css += "table.tborder tbody#collapseobj_usercp_reputation tr td.alt2 img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_pos.gif'] {background-color: blue;}";
	// Reputation: Negative
	//css += "table.tborder tbody#collapseobj_usercp_reputation tr td.alt2 img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_neg.gif'] {background-color: red;}";
	
	// Reputation
	// Reputation: Positive
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_pos.gif'] {background-color: blue;}";
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_highpos.gif'] {background-color: blue;}";
	// Reputation: Negative
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_neg.gif'] {background-color: red;}";
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_highneg.gif'] {background-color: red;}";
	// Reputation: None
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/reputation/reputation_balance.gif'] {background-color: white;}";
	

	// Contacts & Friends
	css += "fieldset.fieldset form#buddylist_change_form.floatcontainer ul#buddylist li {background-color: #2E2E2E !important;}";

	// Button style
	// Button: General
	css += "input.button {background-color: #0c0c0c !important; border: 2px solid #757575; transition: 0.3s; cursor:pointer;}";
	// Button: General hover
	css += "input.button:hover {background-color: #757575 !important;}";
	// Button: Input form
	css += "input#qr_submit.button, input#qr_preview.button {background-color: #424242 !important; padding: 10px; border: none; transition: 0.3s; text-align: center; cursor:pointer;}";
	// Button: Input form hover
	css += "input#qr_submit.button:hover, input#qr_preview.button:hover {background-color: #263238 !important; }";

	// Page generated notice
	// Page generated notice: Color
	// Ex: Page generated in 0.00906 seconds with 9 queries
	css += "body center span.smallfont {color: #424242 !important;}";

	// Quote
	// Quote: Border style
	css += "div.vb_postbit div table tbody tr td.alt2 {border-color: #2c3e50 !important; border-width: 1px 1px 1px 10px !important; }";
	// Quote: Font style
	css += "div.vb_postbit div table tbody tr td.alt2 div font, div.vb_postbit div table tbody tr td.alt2 div font font {font-size: 1em;}";
	// Quote: Font color
	//css += "div.vb_postbit div table tbody tr td.alt2 div font font, div.vb_postbit div table tbody tr td.alt2 div, div.vb_postbit div table tbody tr td.alt2 div strong {color: #424242 !important;}";
	// Quote: Brightness
	css += "div.vb_postbit div table tbody tr td.alt2 div font font, div.vb_postbit div table tbody tr td.alt2 div, div.vb_postbit div table tbody tr td.alt2 div strong {filter: brightness(75%);}";

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
	// Backup Color #F5F5F5
	css += ".panel, strong, a, .alt1, .alt1 div, .alt2, .time, .smallfont, select, .postbit_box, label, .button, h1, h2, h3, h4, h5, h6, p, .poll, td.sticky div {color: #e0e0e0 !important;}";

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

// Remove item from guess homepage
function funRemEleHomeGuess() {
	// Downloads
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[4]');

	// ElaKiri Exclusive!
	//funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[2]/div[1]');

	// Checkout!
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[3]/div');

	// Current Poll
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/form[2]');

	// ElaKiri Events!
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/div[3]');

	// Site Navigation
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/table[2]/tbody/tr/td[1]/div[1]');

	// Navbar Downloads
	funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[2]');

	// Navbar FAQ
	funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[3]');

	// Navbar Contact Us
	//funRemoveElement('/html/body/table/tbody/tr/td/table[1]/tbody/tr[2]/td/table/tbody/tr/td[8]');

	// Copyright bar
	funRemoveElement('/html/body/table/tbody/tr/td/div/div/div/div[8]');
}

// Remove item from user homepage
function funRemEleHomeUser() {
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

function funRemoveStyle(pathValue) {
    var element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	if(element) {
		element.removeAttribute("style");
	}
}


// This can be used to get the selected style
function funGetCookie(name) {
    let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`);
    return a ? a[1] : '';
}