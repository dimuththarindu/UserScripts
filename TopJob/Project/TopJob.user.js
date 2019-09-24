// ==UserScript==
// @name         TopJob
// @namespace    UserScripts
// @version      6.6
// @author       DT
// @description  TopJob Website User Experience
// @source       https://github.com/dimuththarindu/UserScripts
// @icon         https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Images/Icon-64.png
// @icon64URL	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Images/Icon-64.png
// @updateURL  	 https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Project/TopJob.user.js
// @downloadURL  https://raw.githubusercontent.com/dimuththarindu/UserScripts/master/TopJob/Project/TopJob.user.js
// @supportURL   https://github.com/dimuththarindu/UserScripts/issues
// @match        *://*.topjobs.lk/*
// @run-at       document-end
// @grant        GM_addStyle
// @license      Apache License 2.0
// @history      5.0 Re-enable right click
// @history      4.0 Change URLs
// @history      3.2 Added Image folder
// @history      3.1 Change support URL
// @history      3.0 Small changes to the script
// @history      2.0 Change the download & update URLs
// @history      1.0 Remove the right click restriction
// ==/UserScript==



(function() {
    'use strict';

	// Re-enable right click menu
	funReenableRightClick();
	
	// Remove unwanted elements
	funRemoveElements();

	// Fix URLs
	funReplaceCrazyURLs();
})();

function funRemoveElements()
{
	var pathValue = "";
    var element = "";

    pathValue = '/html/body/div[9]/div';
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if(element) {element.removeAttribute("style");}

	pathValue = '//*[@id="hotjobs"]/div[2]';
    element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if(element) {element.removeAttribute("style");}

    //pathValue = '//*[@id="header"]';
    //element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //element.parentNode.removeChild(element);

    //pathValue = '//*[@id="redBG"]';
    //element = document.evaluate(pathValue, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //element.parentNode.removeChild(element);
}

// Re-enable right click
function funReenableRightClick()
{
    document.oncontextmenu = undefined;
	javascript:void(document.oncontextmenu=null);
	//document.querySelectorAll('*').forEach(e => e.oncontextmenu = null)
}

function funReplaceCrazyURLs()
{
	// replace all URLs
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
		
		if(links[i].href.includes("javascript:openSizeWindow('../employer/JobAdvertismentServlet"))
		{
			// Href URL: javascript:openSizeWindow('../employer/JobAdvertismentServlet?rid=3&ac=0000000419
			// &jc=0000689612&ec=0000000552&pg=applicant/vacancybyfunctionalarea.jsp',1098,631,
			// 'quickvacancysearch_17DH+5vzluofT1dbd2GGz7-Nf')
			
			links[i].href = links[i].href.substring(0, links[i].href.indexOf(".jsp'") + 4);
			links[i].href = links[i].href.replace("javascript:openSizeWindow('..", window.location.origin);
			links[i].target = "_blank";
		}
		else if(links[i].href.includes("javascript:openSizeWindow('employer/JobAdvertismentServlet"))
		{
			// Href URL: javascript:openSizeWindow('employer/JobAdvertismentServlet?ac=DEFZZZ&ec=DEFZZZ&jc=0000689952&pg=index.jsp',1098,631,'tjadv')
			// Generated URL: http://topjobs.lk/employer/JobAdvertismentServlet?ac=DEFZZZ&ec=DEFZZZ&jc=0000689952&pg=index.jsp
			
			links[i].href = links[i].href.substring(0, links[i].href.indexOf(".jsp'") + 4);
			links[i].href = links[i].href.replace("javascript:openSizeWindow('", window.location.origin + "/");
			links[i].target = "_blank";
		}
    }
}