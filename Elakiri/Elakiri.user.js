// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      1.3
// @author       DT
// @description  Clean Elakiri
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @include      *://*.elakiri.com/*
// @include      *://*.elakiri.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==



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

// Posting Rules / Sub Thread
funRemoveElement('/html/body/table/tbody/tr/td/div[3]/div/div/table[5]');

function funNewDesign() {
    var css = "";

    css += ".page, table, tbody, .bginput, select, td, .header_box, .postbit_box, .panel, .button, center{background: black !important;border-color: #4B515D !important}";

    css += ".thead{background: #2E2E2E !important}";

    css += ".alt1, .alt2{background: #212121 !important}";

    css += ".navbar, .vbmenu_control, .tfoot, .tcat{background: #01579b !important}";

    css += ".vBulletin_editor, .vBulletin_editor td{background: #e0e0e0 !important}";

    css += "strong, a, .alt1, .alt1 div, .alt2, .time, .smallfont, select, .postbit_box, label, .button{color: #F5F5F5 !important}";

    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var element = document.evaluate('/html/body/table/tbody/tr/td/table[1]/tbody/tr[1]/td/a/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    element.id = 'ElakiriInjectLogo';
    document.getElementById("ElakiriInjectLogo").src = "https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Logo.png";

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