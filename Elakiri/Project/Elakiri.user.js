// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      21.00
// @author       DT
// @description  Custom Elakiri Design
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Project/Elakiri.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Project/Elakiri.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @match        *://*.elakiri.com/*
// @include      *://*.elakiri.lk/*
// @include      *://elakiri.com/*
// @include      *://elakiri.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==

'use strict';

//funMain();

function funMain() {
	/* try
	{
		funNewDesign();
	}
	catch(err)
	{
		console.log("Elakiri UserScript Error: " + err);
	} */
	funNewDesign();
}

function funNewDesign() {
	funNavBarStyle();
	
	funChangeHoverColor();
	replaceColor('#292e39', '#050505'); // Background
	replaceColor('#313742', '#212020'); // Body
	replaceColor('#3f454f', '#212020'); // Footer
	replaceColor('#373c46', '#141414'); // QuoteHead
	replaceColor('#3b414b', '#1B1B1B'); // QuoteBody
	replaceColor('#4d5460', '#141414'); // QuoteBorder
	replaceColor('#0288d1', '#0984e3'); // QuoteLine
    // replaceColor('#0984e3', '#212020'); // Notice E.g.: Your account is currently awaiting approval by an admin...
    replaceColor('#0288d1', '#212020'); // Main Heading
    replaceColor('#029ff4', '#050505'); // Search Bar
}

function funChangeHoverColor() {
	// Change hover color
	var css = '.structItem--thread:hover { background-color: #050505 }';
	var style = document.createElement('style');

	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
}

function funNavBarStyle() {
	
	window.addEventListener("DOMContentLoaded", function(){
		document.getElementById('js-XFUniqueId3').click();
		document.getElementById('uix_sidebarNav--trigger').click();
	});
}

function replaceColor(col1, col2) {
    var keys = Object.values(window.getComputedStyle($('html').get(0)));
    var filteredKeys = keys.filter(function (key){return key.indexOf('color') > -1});
    var colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(col1).splice(1,3);
    var rgb = 'rgb(' + colors.map(function (color){return parseInt(color, 16)}).join(', ') + ')';
    $("*").each(function (index, element) {
        filteredKeys.forEach(function(key) {
            if ($(element).css(key) == rgb) {
                $(element).css(key, col2);
            }
        });
    });
}