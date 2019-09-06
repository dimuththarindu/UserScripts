// ==UserScript==
// @name         Elakiri Image
// @namespace    UserScripts
// @version      9.1
// @author       DT
// @description  Custom Elakiri Design
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Images/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri-jQuery.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/Elakiri/Elakiri-jQuery.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @include      *://*.elakiri.lk/*
// @match        *://*.elakiri.com/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// ==/UserScript==


'use strict';
funMain();

function funMain() {
	// $("body table tbody tr td div div.page div table.page tbody tr td div table.tborder tbody#collapseobj_module_9 tr td.alt1 div a img").attr("src","https://www130.lunapic.com/do-not-link-here-use-hosting-instead/156768763325748846?9057134036");
	
	// $.each($('img'), function(){
	  // $(this).replaceWith('<span>'+$(this).attr('title')+'</span>');
	// });
	
	
}

function allSrc() {
	var imgs = document.images;
	for (var i=0, iLen=imgs.length; i<iLen; i++) {
		if(imgs[i].src == 'http://www.elakiri.com/forum/images/smilies/sq/sad9cd.gif')
		{
			imgs[i].src = 'data:text/plain;charset=utf-8;base64,VGV4dA==';
		}
	}
}
