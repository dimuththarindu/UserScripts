// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      9.2
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
		if((funGetCookie("bbstyleid") !== 7) && (!window.location.href.includes("elakiri.com/forum/archive")) && (!window.location.href.includes("elakiri.lk/forum/archive"))) {
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
		if ((window.location.href.includes("elakiri.com/forum/register.php")) ||
		   (window.location.href.includes("elakiri.lk/forum/register.php"))) {
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
    css += "body, .page, table.page, .header_box, .header_box_guest, .sticky {background: black !important; border-color: #0c0c0c !important;}";
	
	// Font
    css += "* {font-family: tahoma, verdana, geneva, lucida, lucida grande, arial, helvetica, sans-serif, 'nirmala ui';}";
	css += "body, .page, div, table, th, td, a, font, p, strong, b, .vb_postbit {font-family: tahoma, verdana, geneva, lucida, lucida grande, arial, helvetica, sans-serif, 'nirmala ui';}";
	css += ".vb_postbit {font-size: calc(1px + 1vw);}";

	// Drop-down
    css += "select, select optgroup option {background: #141414 !important; border: 1px solid #494949 !important; }";
	css += "select optgroup {background: black !important; color: #e0e0e0 !important;}";

	// menu_popup
	css += "div.vbmenu_popup {border: 1px solid #494949 !important;}";

	css += "fieldset {border: 2px solid #494949;}";

	//css += ".vb_postbit {padding: 2px 2px 2px 10px;}";

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

	// User Online Status Indicator
	// Online Status: Online
	css += "div#posts div div.page div div div table.tborder tbody tr td.alt2 table tbody tr td div img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/user_online.gif'] {cursor:pointer; margin-bottom: 5px; }";
	// Online Status: Offline
	css += "div#posts div div.page div div div table.tborder tbody tr td.alt2 table tbody tr td div img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/user_offline.gif'] {cursor:pointer; margin-bottom: 5px;}";

	// img
	// img[src='xxx']
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/firstnew.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_hot_new.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/lastpost.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/paperclip.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/tag.png'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_new.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_hot.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_tcat.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_tcat_collapsed.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/navbits_start.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/navbits_finallink_ltr.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/user_online.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/user_offline.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_thead.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_thead_collapsed.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/reputation.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/viewpost.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_dot_hot_new.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_dot.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_lock.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/thread_dot_hot.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/poll_posticon.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/sortasc.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/sortdesc.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_alt_collapsed.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/buttons/collapse_alt.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/subscribed.gif'] {border: 1px solid #01579b; opacity: 0.6; filter: alpha(opacity=60); /* For IE8 and earlier */}";

	// img
	// Instant Messaging
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/misc/im_skype.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/im_yahoo.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/im_msn.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/im_aim.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/misc/im_icq.gif'] {opacity: 0.6; filter: alpha(opacity=60); /* For IE8 and earlier */}";

	// img
	// Smilie List
	//css += "img[src='http://www.elakiri.com/forum/images/smilies/sq/oo7dt.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/rofl8yi.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/angry6wn.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/love.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/yes4lo.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/wink0st.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/sorry8bj.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/shocked7fl.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/sad9cd.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/growl5cj.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/frown3qg.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/no6xn.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/nerd6bs.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/laugh8kb.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/happy8se.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/eek4wd.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/cool.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/confused1bb.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/biggrin9gp.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/rolleyes5cz.gif'], img[src='http://www.elakiri.com/forum/images/smilies/P.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/baffled5wh.gif'], img[src='http://www.elakiri.com/forum/images/smilies/sq/dull8ay.gif'] {opacity: 0.6; filter: alpha(opacity=60); /* For IE8 and earlier */}";
	// ^ Error: Not working

	// Rep Power
	css += "body table tbody tr td div div.page div table.page tbody tr td div table.tborder tbody#collapseobj_module_9 tr td.alt1 div.smallfont div {font-weight: bold; line-height: 1.8;}";

	// Contacts & Friends
	css += "fieldset.fieldset form#buddylist_change_form.floatcontainer ul#buddylist li {background-color: #2E2E2E !important;}";

	// Button style
	// Button: General A
	css += "input.bginput {background-color: black; border-block-color: black; border: 1px solid #494949; color: whitesmoke;}";
	// Button: General B
	css += "input.button {background-color: #0c0c0c !important; border: 1px solid #494949; transition: 0.3s; cursor:pointer;}";
	// Button: General B hover
	css += "input.button:hover {background-color: #202020 !important;}";
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
	css += "div.vb_postbit div table tbody tr td.alt2 {filter: brightness(75%); transition-property: filter;  transition-duration: 1s;}";
	// Quote: Brightness: Hover
	css += "div.vb_postbit div table tbody tr td.alt2:hover {max-width: 100% !important; filter: none !important;}";
	// Quote: Hide viewpost img
	css += "div.vb_postbit div table tbody tr td.alt2 div a img.inlineimg[src='http://www.elakiri.com/forum/images/bluesaint/buttons/viewpost.gif'] {display: none;}";
	// Quote: Image
	css += "div.vb_postbit div table tbody tr td.alt2 div img {max-width: 10% !important; transition-property: max-width; transition-duration: 1s;}";
	// Quote: Hover
	css += "div.vb_postbit div table tbody tr td.alt2 div img:hover {max-width: 80% !important; transition-property: max-width;  transition-duration: 1s; transition-delay: 1s;}";

	// Fix image width
	css += ".vb_postbit > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2) > img:nth-child(1) {max-width: 100%;}";
	css += "div#posts div div.page div div div table.tborder tbody tr td div.vb_postbit img {max-width: 100%;}";
	css += "form div table.tborder tbody tr td div.vb_postbit img {max-width: 100%;}";
	//css += "img {max-width: 100%;}";
	// ^ Error: Effect the vB_Editor_QR_controls

	// Threads
	css += "img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/post_new.gif'], img[src='http://www.elakiri.com/forum/images/bluesaint/statusicon/post_old.gif'] {display: none;}";

	// ElaKiri Community Rules
	//css += "body table tbody tr td div div.page div form table.tborder tbody tr td.panelsurround div.panel div fieldset.fieldset legend {color: #e0e0e0; font-weight: bold; font-size: 14px;}";
	// ^ Error: Effect fonts in other pages
	css += "body table tbody tr td div div.page div form table.tborder tbody tr td.panelsurround div input.button {padding: 5px 10px 5px 10px;}";
	css += "body table tbody tr td div div.page div form table.tborder tbody tr td.panelsurround div.panel div fieldset.fieldset legend {color: #e0e0e0; font-weight: bold}";
	css += "body table tbody tr td div div.page div form table.tborder tbody tr td.panelsurround div.panel div fieldset.fieldset table tbody tr td div.page {background-color: #262525 !important; padding: 10px; margin: 5px;}";

	// Global
	// Set light black #141414
	css += ".poll, .alt1Active, #navbar_search_menu .vbmenu_option {background: #141414;}";

	// Global
	// Set border color
	css += ".statistics_group, #collapseobj_contactinfo div fieldset {border-color: #0c0c0c;}";

	// Text
	// Black font color change
	css += "font[color='black'] {color: #6b6b6b;}";

	// Global
	// Text White
	// Backup Color #F5F5F5
	css += ".panel, strong, a, .alt1, .alt1 div, .alt2, .time, .smallfont, select, select optgroup option, .postbit_box, label, .button, h1, h2, h3, h4, h5, h6, p, .poll, td.sticky div {color: #e0e0e0 !important;}";

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
		element.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAA5CAYAAAC8nQfIAAAACXBIWXMAAAsTAAALEwEAmpwYAAA892lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE5LTA5LTAyVDAxOjM2OjQ2KzA1OjMwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOS0wOS0wMlQwMTozNjo0NiswNTozMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTktMDktMDJUMDE6MzY6NDYrMDU6MzA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjRjMDc4MTdmLTRjZWItNzE0ZC04YTU1LTUwNjAwMzAwNjhkZTwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDoxYzdkYWZkZi1iZGQ1LTI1NGQtOGE4Ny0wOTFjMzg4ZDI1OWY8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoxYzdkYWZkZi1iZGQ1LTI1NGQtOGE4Ny0wOTFjMzg4ZDI1OWY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWM3ZGFmZGYtYmRkNS0yNTRkLThhODctMDkxYzM4OGQyNTlmPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE5LTA5LTAyVDAxOjM2OjQ2KzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo0YzA3ODE3Zi00Y2ViLTcxNGQtOGE1NS01MDYwMDMwMDY4ZGU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMDJUMDE6MzY6NDYrMDU6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPlRIRSBMQVJHRVNUIFNSSSBMQU5LQU4gT05MSU5FIENPTU1VTklUWTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ+VEhFIExBUkdFU1QgU1JJIExBTktBTiBPTkxJTkUgQ09NTVVOSVRZPC9waG90b3Nob3A6TGF5ZXJUZXh0PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPkVsYWtpcmkuY29tPC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5FbGFraXJpLmNvbTwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6VGV4dExheWVycz4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyYTI4OTk0Yy1kNDgzLTkwNGYtOGEwOC0zMGMwMzg3OGU4Y2U8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjMxMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+8wZFTwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAJ/0lEQVR42uxd+3HqTg9VmF8DTglOCVACKcEZCmCgBCgBSsBDAQyUACXEJcQlxB3A90ekD2Xv2ivADyDnzHjuDX6sVqs9K+3z5XQ6EQAAwDOhBxUAAABiAwAAALEBAACA2AAAAEBsAAAAIDYAAEBsAAAAj4T/OmfW0fqW17+IKK64PyWi9E503basMadZhZTTbRr3JAtQI46b8fMSW2+0nhHRokE534noADMCAAChKAAAIDYAAAAQGwAAAIgNAACgefwHFTwtciJ6gSwAPDYAAAB4bBdhetyM/5mndeM8NgAAAHhsHsz4WhDRqeL6Vs/2obaHR8JluTWUd3RlGv1AGieVRtMYcjpu+ivWheX9f+pIb7Re9EbrIYjtfshMCmfBV8i4IvXspzL8tuU9BSqJxlfg+UlJepe+F3Pa+r2vmmSpE5HS5ZbLMjGU9zeXubW8J5zfz0AapNIQmWJjGlZ9xvzdPfkn0U/UfV/aMd/bl+R/RkT73mi9BbF1j7imSrJgA2vSg+uTbVXHkq+2sWIdLGrSa1OYMEEtbiyHVcAm9vzMNbpIWJd1NZgJk6vVI9s73qkQtMUjS3qj9R7E9lwkuW+oUkfcmoZwIKJ5y/nus9FPHqCMVgFCqssOPo0kEMKiBnnFE4suzMPiBp0NeXkliO1JEDVUcSwtf05EHy3nd8iVOH6Aslm1QL5RA43b5EbPrX9DuvsbdHYXxNbmqOiqN1pfU/kfZf7TkK+6FuvPDCFEwaRWtJzX5EHKZNaSR9lUGL5ge8o6sOWrSb43WifHzXgHj617pBzKvTKR6mtK9r6rukaHrP1q0w6M/pG8aKv3MCeiN6fc343h/dBInkvHvqw71iweUPedzxr4y8SWseFq8ioqSG9g8Iz6NVXIrbEy7gioCqlC/Us5E9qS/69x4N9fAg2bhdQ+uLwK5/vvhjIc3tBgZmzbmrAv2fNvxzLKu29GMu68i+KvEtuUiWp5oZGkLRSopV9tR92MgLqkMOdK++K53u4gDLUQTm5sRAaeZyNDWJ4GyGtqaDCvCf2XLHPqSe9g1M2H82xu7PqIuq7gCEUvr8xNV8aQEWfU/mCBrzKKp3OPXuPQULnSC8P4jPM8vbDrIaSfwvBMUrOtHoz5vVbezj02LIL3G1FcUyhwaWVMDMb6gSIKwtIlkLaUzsH4zCTgAcU1Nqy39svm924AILYf45TlJl260JZW+eMRjOoOEPIYCqpn0CWUTlYjUdRJbMWzG8BfXgQvI4/DBymrjDAC2jbhhBBqCK0EUtSQpzaJ7e6J8a/2sU2ovlnibRLxjIA6kN9ZOvDCQWy1hHyrB5X93tdjAgCIrQPIwnULZP6anrjb9LmXFhd/C7NtPIRsKyRuIswE6O8NHiRkmyPWxchjTj+TIUNrDiUkXcJ8r24g4pbSsRJoZLQPAB5bKSlUocs5YjL73bKMZ0HY7DJUjiE7iFpIp06PDcQGYrvagO7htPkd2Sa9rv5Ima2oekPF1ZUkUMfi+FA6EdkGqEKNVAFiA7G1EYI0jTnZ1qVilLS8gQrpb3ahPcj+c6sLG8LQ/MTIQLJYE3whHmHbIiL7TgghhIx9eOP9upBzaBoa6OhqW5t7hyz7Cc3m35Jt0vOkxDMs6GeQaRJ491BBTitDWAxig8d2U+jQZ2Pve1r3b2p3H7KlkcxXMONS/Vm9MN8BPfochyodW5ZmyfkKkePJ7cm2NviA4gSxhYzEEjp80u9+nAV1s9xqaqycCEn9jZh1u/SFp8yt5zhYdn3RjaN8f2uMAOYoShBbCCk91jo5jJK24/XeinlD3QFtyQ9ie3AUdNv8r11HldMyIoaQ1I+6+mdDdlX3BgUpvDUQ26VEcemWNTn9bNrXVeuJkPR2cmuaJOq0kTk1v8oFxPaEuOQcA9kPv8uRx4ORjBGSVjdobzd47LmBcAom0emV3tuOLt/ZGfDg5XQ6dcus3W1bRPTTMZzQv3ux5UwkMLDnhSyv61P5yGTKtnDtlBrZ668qjbki3ofDcTMGsQEAACAUBQAAuAK1rDzojdYR/czRcbEknpV93Ixf1XPZcTMe9EbrbycEdHfWkG++esKILf30aci9rePuy4L2nM4ntcv9gkMA3zZGA/5XdtfNWS4JKchJY6D+ltO7Yw5f5Pr0hB9Lzl9U8i3Jz8AJg3x5n7G80oE9pPOs+pjvzTm0+lT5LPjvvpKJlFzy26ejGwnjV/R7QfmB05xUyJN48uWW3UCl+c7PfdP58JgyfQpkVYHIlqm0dbdDofQieZ7y366eq+6/iV2z7H2WUY50DOlCh76+VQw516E3rm9f+m+gIY/tuBkXx834RRn+7rgZvxw3Y8tIVEHnI9usO2sMlQG7fRevbHx9ZSQyGVKOipvS74mXcyVDxs/H/C0xVDlfsVAy+yp6zvfmThpyRmVO5wm/r3Tef39QQ95ltnwZZMKpHPkWK7L29QFVnQMxY1mmSqfu4cEheQQfdJ5K8+qR2YedKjO3f2qvyk/KNFEE86LK0v3+ROXPh9D9Mvh08Svfx814yvVIfhvw3ykRxb3RetIbraVvMAV9PV8omtB5WN03e1u3yDE/o3fN2FH18H9E55PEIyY1695b4gXKYbVU0gIXDeQ9o/KDgoV0UvV+ojytvkPEGVWfpq49zf97FY5XWyWPBRlVd7yXEUiffk+70GdpZk45RErmgs7TZvr078hm6H4oL1fp4rgZi+cnHl4BYrsPYot6o/WpJFyN6LzMZGas2BGT08Fj9N9MLDKqqY02od9LWrRXoOVbqkr9xR6AxXB3yvBPjjcgvxFdv+dbKO8ple8WMVTP6O/lyuNJnEq/q6iMsdKrSxgWeSzYsRyTEl1IWWoy7Ttylcnrkznn3xacdnHh/SrcqouUzkdBpsfNuAB9dU9sEqq+BkJRy5C3VNAVnQ/G1RXyTbWs2pMQQvDJIKHoqxM2zplALGd+kgp1ZbXAzAlFl074dylCedfk6iMJeVd7NrEi7sTTRxqRf71k7nhu/QDZ0w0Vuh8IRTMPWUUBectkXjr6stwvDCR3qy5Sx46BJwtFJRR7YRJzQ7JCeWozNqiCW0prSCMdz3o5k3VnEOl0920OOFeEFzWQd6poHDJHL6IL6TtMS8LRXUU4rckhLvGCbp2fZV1S5npVWi8rlq9wiEV+yzyEuQv07e086cZOQ1DUpYvjZiz5Ko6bMbapegBii0rCQ9/9FVfAVBnT3GP4SxUyDBXRbDnczJ0+mIUT1mR03rk14T6azFChcg5dq0JOGVQQWaSP57Pku7LrxJcx71lFBdLEKg3AQXkESw/hTku8EemrW6my8a2QKJNH8vVJv0dFv0vkrgpF3S6Md86n7KYRKzli9V5E9S21mqo0t+Sf4O3q4le+edYAUAMwQRcAAHhsAAAAIDYAAICW8b8BAE6sR17nOIxTAAAAAElFTkSuQmCC";
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