// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      23.30
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

funMain();

function funMain() {
	var pathname = window.location.pathname;
	var runner = false;
	
	switch (pathname) {
		case "/":
		case "/threads/trending":
		case "/threads/latest":
		case "/threads/newest":
			funNavStyleLeft();
			funNavStyleRight();
			funChangeHoverColor();
			//funDarkTheme();
			//funChangeTheme();
			break;
		case "/forums/":
			funNavStyleLeft();
			break;
		default:
			runner = true;
	}
	
	// if the pathname is equal to a thread url
	if((runner) && (/\d/.test(pathname)))
	{
		funNavStyleLeft();
		funChangeHeader();
		funDarkTheme();
		//funChangeTheme();
	}
	
}

function funDarkTheme() {
	replaceColor('#292e39', '#050505'); // Background
	replaceColor('#313742', '#212020'); // Body
	replaceColor('#3f454f', '#212020'); // Footer
	replaceColor('#373c46', '#141414'); // QuoteHead
	replaceColor('#3b414b', '#1B1B1B'); // QuoteBody
	replaceColor('#4d5460', '#141414'); // QuoteBorder
	replaceColor('#029ff4', '#050505'); // Search Bar
	//replaceColor('#0288d1', '#0984e3'); // QuoteLine
    //replaceColor('#0288d1', '#212020'); // Main Heading    
	// replaceColor('#0984e3', '#212020'); // Notice E.g.: Your account is currently awaiting approval by an admin...
	
	funDarkThemeMinorFix();
}

function funDarkThemeMinorFix() {
	// Change hover color
	var css = '.p-nav, .p-nav-inner, .p-navSticky, .p-navSticky.is-sticky, .uix_headerContainer { background-color: #050505 !important}';
	var style = document.createElement('style');
	style.innerText = css;
	document.head.appendChild(style);
}


function funChangeHoverColor() {
	// Change hover color
	var css = '.structItem--thread:hover { background-color: #050505 }';
	var style = document.createElement('style');
	style.innerText = css;
	document.head.appendChild(style);
}

function funChangeHeader() {
	var css = '.p-nav-inner, .uix_headerContainer, .p-nav { background-color: #212020 }';
	var style = document.createElement('style');
	style.innerText = css;
	document.head.appendChild(style);
}

function funChangeTheme() {
	var css = "";
	var style = document.createElement('style');
	
	css += 'body, .uix_sidebarNav__inner, .uix_sidebarNav  { background-color: #050505 } ';
	css += 'div.block-container:nth-child(2), .block-filterBar, #footer, .p-footer-inner, .uix_sidebarInner > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2), div.block:nth-child(2), div.block:nth-child(2) > div:nth-child(1) > div:nth-child(2), .uix_sidebarInner > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) { background-color: #212020 } ';
	
	style.innerText = css;
	document.head.appendChild(style);
}

function funNavStyleLeft() {
	
	window.addEventListener("DOMContentLoaded", function(){
		document.getElementById('uix_sidebarNav--trigger').click();
	});
}

function funNavStyleRight() {
	
	window.addEventListener("DOMContentLoaded", function(){
		document.getElementById('js-XFUniqueId3').click();
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