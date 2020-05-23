// ==UserScript==
// @name         Elakiri
// @namespace    UserScripts
// @version      20.02
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
	try
	{
		funNewDesign();
	}
	catch(err)
	{
		console.log("Error: " + err);
	}
}

function funNewDesign() {

	funChangeHoverColor();

	replaceColor('#292e39', '#050505'); // Background
	replaceColor('#313742', '#212020'); // Body
	replaceColor('#3f454f', '#212020'); // Footer

	replaceColor('#373c46', '#141414'); // QuoteHead
	replaceColor('#3b414b', '#1B1B1B'); // QuoteBody
	replaceColor('#4d5460', '#141414'); // QuoteBorder
	replaceColor('#0288d1', '#0984e3'); // QuoteLine

    //replaceColor('#0984e3', '#212020'); // Notice E.g.: Your account is currently awaiting approval by an admin...
    replaceColor('#0288d1', '#212020'); // Main Heading
    replaceColor('#029ff4', '#050505'); // Search Bar

	funNavBarStyle();
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

	if (window.location.pathname.includes("/threads/"))
	{
		var navBarLeft = document.evaluate('/html/body/div[2]/div/div[3]/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		var stlogo = document.evaluate('/html/body/div[2]/div/div[1]/div[2]/nav/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		var txtbody = document.evaluate('/html/body/div[2]/div/div[3]/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

		navBarLeft.id = "navBarLeft";
		stlogo.id = "stlogo";
		txtbody.id = "txtbody";

		$('#navBarLeft').fadeOut();

		$(function() {
		$('#stlogo').hover(function() {
			$('#navBarLeft').fadeIn();
		});
		});

		$(function() {
		$('#txtbody').hover(function() {
			$('#navBarLeft').fadeOut();
		});
		});
	}
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

/* function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
} */