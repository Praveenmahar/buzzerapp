let observer;
let observer1;
let observer2;
let time = 60;
var soundfile = "data:audio/wav;base64,UklGRhwMAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0Ya4LAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH+AfXZ1eHx6dnR5fYGFgoOKi42aloubq6GOjI2Op7ythXJ0eYF5aV1AOFFib32HmZSHhpCalIiYi4SRkZaLfnhxaWptb21qaWBea2BRYmZTVmFgWFNXVVVhaGdbYGhZbXh1gXZ1goeIlot1k6yxtKaOkaWhq7KonKCZoaCjoKWuqqmurK6ztrO7tbTAvru/vb68vbW6vLGqsLOfm5yal5KKhoyBeHt2dXBnbmljVlJWUEBBPDw9Mi4zKRwhIBYaGRQcHBURGB0XFxwhGxocJSstMjg6PTc6PUxVV1lWV2JqaXN0coCHhIyPjpOenqWppK6xu72yxMu9us7Pw83Wy9nY29ve6OPr6uvs6ezu6ejk6erm3uPj3dbT1sjBzdDFuMHAt7m1r7W6qaCupJOTkpWPgHqAd3JrbGlnY1peX1hTUk9PTFRKR0RFQkRBRUVEQkdBPjs9Pzo6NT04Njs+PTxAPzo/Ojk6PEA5PUJAQD04PkRCREZLUk1KT1BRUVdXU1VRV1tZV1xgXltcXF9hXl9eY2VmZmlna3J0b3F3eHyBfX+JgIWJiouTlZCTmpybnqSgnqyrqrO3srK2uL2/u7jAwMLFxsfEv8XLzcrIy83JzcrP0s3M0dTP0drY1dPR1dzc19za19XX2dnU1NjU0dXPzdHQy8rMysfGxMLBvLu3ta+sraeioJ2YlI+MioeFfX55cnJsaWVjXVlbVE5RTktHRUVAPDw3NC8uLyknKSIiJiUdHiEeGx4eHRwZHB8cHiAfHh8eHSEhISMoJyMnKisrLCszNy8yOTg9QEJFRUVITVFOTlJVWltaXmNfX2ZqZ21xb3R3eHqAhoeJkZKTlZmhpJ6kqKeur6yxtLW1trW4t6+us7axrbK2tLa6ury7u7u9u7vCwb+/vr7Ev7y9v8G8vby6vru4uLq+tri8ubi5t7W4uLW5uLKxs7G0tLGwt7Wvs7avr7O0tLW4trS4uLO1trW1trm1tLm0r7Kyr66wramsqaKlp52bmpeWl5KQkImEhIB8fXh3eHJrbW5mYGNcWFhUUE1LRENDQUI9ODcxLy8vMCsqLCgoKCgpKScoKCYoKygpKyssLi0sLi0uMDIwMTIuLzQ0Njg4Njc8ODlBQ0A/RUdGSU5RUVFUV1pdXWFjZGdpbG1vcXJ2eXh6fICAgIWIio2OkJGSlJWanJqbnZ2cn6Kkp6enq62srbCysrO1uLy4uL+/vL7CwMHAvb/Cvbq9vLm5uba2t7Sysq+urqyqqaalpqShoJ+enZuamZqXlZWTkpGSkpCNjpCMioqLioiHhoeGhYSGg4GDhoKDg4GBg4GBgoGBgoOChISChISChIWDg4WEgoSEgYODgYGCgYGAgICAgX99f398fX18e3p6e3t7enp7fHx4e3x6e3x7fHx9fX59fn1+fX19fH19fnx9fn19fX18fHx7fHx6fH18fXx8fHx7fH1+fXx+f319fn19fn1+gH9+f4B/fn+AgICAgH+AgICAgIGAgICAgH9+f4B+f35+fn58e3t8e3p5eXh4d3Z1dHRzcXBvb21sbmxqaWhlZmVjYmFfX2BfXV1cXFxaWVlaWVlYV1hYV1hYWVhZWFlaWllbXFpbXV5fX15fYWJhYmNiYWJhYWJjZGVmZ2hqbG1ub3Fxc3V3dnd6e3t8e3x+f3+AgICAgoGBgoKDhISFh4aHiYqKi4uMjYyOj4+QkZKUlZWXmJmbm52enqCioqSlpqeoqaqrrK2ur7CxsrGys7O0tbW2tba3t7i3uLe4t7a3t7i3tre2tba1tLSzsrKysbCvrq2sq6qop6alo6OioJ+dnJqZmJeWlJKSkI+OjoyLioiIh4WEg4GBgH9+fXt6eXh3d3V0c3JxcG9ubWxsamppaWhnZmVlZGRjYmNiYWBhYGBfYF9fXl5fXl1dXVxdXF1dXF1cXF1cXF1dXV5dXV5fXl9eX19gYGFgYWJhYmFiY2NiY2RjZGNkZWRlZGVmZmVmZmVmZ2dmZ2hnaGhnaGloZ2hpaWhpamlqaWpqa2pra2xtbGxtbm1ubm5vcG9wcXBxcnFycnN0c3N0dXV2d3d4eHh5ent6e3x9fn5/f4CAgIGCg4SEhYaGh4iIiYqLi4uMjY2Oj5CQkZGSk5OUlJWWlpeYl5iZmZqbm5ybnJ2cnZ6en56fn6ChoKChoqGio6KjpKOko6SjpKWkpaSkpKSlpKWkpaSlpKSlpKOkpKOko6KioaKhoaCfoJ+enp2dnJybmpmZmJeXlpWUk5STkZGQj4+OjYyLioqJh4eGhYSEgoKBgIB/fn59fHt7enl5eHd3dnZ1dHRzc3JycXBxcG9vbm5tbWxrbGxraWppaWhpaGdnZ2dmZ2ZlZmVmZWRlZGVkY2RjZGNkZGRkZGRkZGRkZGRjZGRkY2RjZGNkZWRlZGVmZWZmZ2ZnZ2doaWhpaWpra2xsbW5tbm9ub29wcXFycnNzdHV1dXZ2d3d4eXl6enp7fHx9fX5+f4CAgIGAgYGCgoOEhISFhoWGhoeIh4iJiImKiYqLiouLjI2MjI2OjY6Pj46PkI+QkZCRkJGQkZGSkZKRkpGSkZGRkZKRkpKRkpGSkZKRkpGSkZKRkpGSkZCRkZCRkI+Qj5CPkI+Pjo+OjY6Njo2MjYyLjIuMi4qLioqJiomJiImIh4iHh4aHhoaFhoWFhIWEg4SDg4KDgoKBgoGAgYCBgICAgICAf4CAf39+f35/fn1+fX59fHx9fH18e3x7fHt6e3p7ent6e3p5enl6enl6eXp5eXl4eXh5eHl4eXh5eHl4eXh5eHh3eHh4d3h4d3h3d3h4d3l4eHd4d3h3eHd4d3h3eHh4eXh5eHl4eHl4eXh5enl6eXp5enl6eXp5ent6ent6e3x7fHx9fH18fX19fn1+fX5/fn9+f4B/gH+Af4CAgICAgIGAgYCBgoGCgYKCgoKDgoOEg4OEg4SFhIWEhYSFhoWGhYaHhoeHhoeGh4iHiIiHiImIiImKiYqJiYqJiouKi4qLiouKi4qLiouKi4qLiouKi4qLi4qLiouKi4qLiomJiomIiYiJiImIh4iIh4iHhoeGhYWGhYaFhIWEg4OEg4KDgoOCgYKBgIGAgICAgH+Af39+f359fn18fX19fHx8e3t6e3p7enl6eXp5enl6enl5eXh5eHh5eHl4eXh5eHl4eHd5eHd3eHl4d3h3eHd4d3h3eHh4d3h4d3h3d3h5eHl4eXh5eHl5eXp5enl6eXp7ent6e3p7e3t7fHt8e3x8fHx9fH1+fX59fn9+f35/gH+AgICAgICAgYGAgYKBgoGCgoKDgoOEg4SEhIWFhIWFhoWGhYaGhoaHhoeGh4aHhoeIh4iHiIeHiIeIh4iHiIeIiIiHiIeIh4iHiIiHiIeIh4iHiIeIh4eIh4eIh4aHh4aHhoeGh4aHhoWGhYaFhoWFhIWEhYSFhIWEhISDhIOEg4OCg4OCg4KDgYKCgYKCgYCBgIGAgYCBgICAgICAgICAf4B/f4B/gH+Af35/fn9+f35/fn1+fn19fn1+fX59fn19fX19fH18fXx9fH18fXx9fH18fXx8fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x7fHt8e3x8e3x7fHt8e3x7fHx8fXx9fH18fX5+fX59fn9+f35+f35/gH+Af4B/gICAgICAgICAgICAgYCBgIGAgIGAgYGBgoGCgYKBgoGCgYKBgoGCgoKDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KDgoOCg4KCgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGCgYKBgoGBgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCBgIGAgYCAgICBgIGAgYCBgIGAgYCBgIGAgYCBgExJU1RCAAAASU5GT0lDUkQMAAAAMjAwOC0wOS0yMQAASUVORwMAAAAgAAABSVNGVBYAAABTb255IFNvdW5kIEZvcmdlIDguMAAA";
var timeouts = [];
var chats = []

chrome.storage.sync.get("time", function(items) { 
	if (!chrome.runtime.error) {
		if(typeof items.time !== "undefined")
			time = items.time;
	}
});

chrome.storage.sync.get("soundfile", function(items) { 
	if (!chrome.runtime.error) {
		if(typeof items.soundfile !== "undefined")
			soundfile = items.soundfile;
	}
});
if (typeof window.injected === "undefined") 
{ 
	window.injected = true; 
	function addObserverIfDesiredNodeAvailable() 
	{	
		const target = document.querySelector('#chats');//document.querySelector('#chats-new');
		const target1 = document.querySelector('.meshim_dashboard_components_ChatBar.chat_bar');
		const target2 = document.querySelector('#chats-new');//document.querySelector('#chats-new');
		if(!target && !target1 && !target2) 
		{
			window.setTimeout(addObserverIfDesiredNodeAvailable,2000);
			return;
		}
		if(target2)
		{
			const target = false;
			observer2 = new window.MutationObserver(
				function(mutations) {
				  mutations.forEach(
					function(mutation) {
					  notify2(mutation.target);
					}
				  );
				}
			);
			observer2.observe(
				target2,
				{
					subtree: true,
					characterData: true,
					childList: true
				}
			);
			notify2(target2);
		}
		if(target)
		{
			observer = new window.MutationObserver(
				function(mutations) {
				  mutations.forEach(
					function(mutation) {
					  notify(mutation.target);
					}
				  );
				}
			);
			observer.observe(
				target,
				{
					subtree: true,
					characterData: true,
					childList: true
				}
			);
			notify(target);
		}
		if(target1)
		{
			observer1 = new window.MutationObserver(
				function(mutations) {
				  mutations.forEach(
					function(mutation) {
					  notify1(mutation.target);
					}
				  );
				}
			);
			observer1.observe(
				target1,
				{
					subtree: true,
					characterData: true,
					childList: true
				}
			);
			notify1(target1);
		}
	}
	addObserverIfDesiredNodeAvailable();

	// Declare extension capabilities to the page
	const capabilities = {
		openInBackground: true
	};
	exposeCapabilities(capabilities);
}

function exposeCapabilities(capabilities) {
  let code = "window.ExtensionCapabilities = window.ExtensionCapabilities || {};";
  for (let key in capabilities) {
    code += "window.ExtensionCapabilities[" + JSON.stringify(key) +
            "] = " + JSON.stringify(capabilities[key]) + ";";
  }

  let script = document.createElement('script');
  script.textContent = code;
  (document.head || document.documentElement).appendChild(script);
  script.parentNode.removeChild(script);
}

function notify(htmlcheck) {
	if(typeof  htmlcheck.tagName !== "undefined")
	{
		if(htmlcheck.tagName.toLowerCase() == "ul")
		{
			var checkguys = htmlcheck.parentElement.dataset.conferenceId;
			if(typeof  checkguys !== "undefined")
			{	
				var toinvestigate  = htmlcheck.childNodes[htmlcheck.childNodes.length-1].previousSibling;
				if(typeof  toinvestigate.className !== "undefined")
				{	
					var classes = toinvestigate.className;
					var tttt 	= "second";
					if(time > 1)
						 tttt   = "seconds";				 
					
					var obj = {settimeout: true,soundfile:soundfile,type:'livechat', chatid: checkguys,msgshow:"Chat is not replied in "+time+" "+tttt};
					if(classes.includes('visitor') && !classes.includes('sneak-peek'))
					{	
						if(typeof timeouts[obj.chatid] === 'undefined' || timeouts[obj.chatid] == false)
						{
							timeouts[obj.chatid] =  setTimeout(function(){ sendmessage(obj,chrome); }, time * 1000);
						}
					}
					else
					{
						if(typeof timeouts[obj.chatid] !== 'undefined')
						{
							clearTimeout(timeouts[obj.chatid]);
							timeouts[obj.chatid] = false;
						}
					}
				}
			}
		}
	}
}
function notify2(htmlcheck) {
	if(typeof  htmlcheck.tagName !== "undefined")
	{
		if(htmlcheck.tagName.toLowerCase() == "ul")
		{
			var checkguys = htmlcheck.parentElement.dataset.conferenceId;
			if(typeof  checkguys !== "undefined")
			{	
				var toinvestigate  = htmlcheck.childNodes[htmlcheck.childNodes.length-1].previousSibling;
				if(typeof  toinvestigate.className !== "undefined")
				{	
					var classes = toinvestigate.className;
					var tttt 	= "second";
					if(time > 1)
						 tttt   = "seconds";				 
					
					var obj = {settimeout: true,soundfile:soundfile,type:'livechat1', chatid: checkguys,msgshow:"Chat is not replied in "+time+" "+tttt};
					if(classes.includes('visitor') && !classes.includes('sneak-peek'))
					{	
						if(typeof timeouts[obj.chatid] === 'undefined' || timeouts[obj.chatid] == false)
						{
							timeouts[obj.chatid] =  setTimeout(function(){ sendmessage(obj,chrome); }, time * 1000);
						}
					}
					else
					{
						if(typeof timeouts[obj.chatid] !== 'undefined')
						{
							clearTimeout(timeouts[obj.chatid]);
							timeouts[obj.chatid] = false;
						}
					}
				}
			}
		}
	}
}
function notify1(htmlcheck) 
{
	if( htmlcheck !== null && htmlcheck.hasAttribute('__jx__id') && (new RegExp('__chats__content')).test(htmlcheck.getAttribute("__jx__id")) )
	{
		var donnotknow = htmlcheck.getAttribute("__jx__id");
		var whattodo = donnotknow.split("__");
		var toinvestigate  = htmlcheck.childNodes[htmlcheck.childNodes.length-1];
		if(typeof  toinvestigate.className !== "undefined")
		{	
			var classes = toinvestigate.className;
			var tttt 	= "second";
			if(time > 1)
				 tttt   = "seconds";
			var obj = {settimeout: true,soundfile:soundfile,type:'zopim', chatid: whattodo[1].substr(whattodo[1].length - 4),msgshow:"Chat is not replied in "+time+" "+tttt};
			if(classes.includes('chat_log_line') && !classes.includes('unverified'))
			{	
				if(typeof timeouts[obj.chatid] === 'undefined' || timeouts[obj.chatid] == false)
				{
					var meeee = toinvestigate.querySelector('.header_container .name');
					if(typeof  meeee.className !== "undefined")
					{
						var classes1 = meeee.className;
						var classes1array = classes1.split(" ");
						for(var iss = 0; iss <= classes1array.length;iss++)
						{
							if((new RegExp('visitor')).test(classes1array[iss]))
							{
								timeouts[obj.chatid] =  setTimeout(function(){ sendmessage(obj,chrome); }, time * 1000);
							}
						}
					}
				}
			}
			else
			{
				if(typeof timeouts[obj.chatid] !== 'undefined')
				{
					clearTimeout(timeouts[obj.chatid]);
					timeouts[obj.chatid] = false;
				}
			}
		}
		
	}
}
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (typeof msg.chatid !== 'undefined' && msg.type  == 'livechat') {
	addObserverIfDesiredNodeAvailable1(msg.chatid);
  }
  if (typeof msg.chatid !== 'undefined' && msg.type  == 'livechat1') {
	addObserverIfDesiredNodeAvailable3(msg.chatid);
  }
  if (typeof msg.chatid !== 'undefined' && msg.type  == 'zopim') {
	addObserverIfDesiredNodeAvailable2(msg.chatid);
  }
});




function addObserverIfDesiredNodeAvailable1(chatid) 
{	
	const targetx = document.querySelector('#circle-'+chatid+' a.circle-container');
	if(!targetx) 
	{
		window.setTimeout(addObserverIfDesiredNodeAvailable1(chatid),2000);
		return;
	}
	targetx.click();
}

function addObserverIfDesiredNodeAvailable3(chatid) 
{	
	const htmlcheck = document.querySelector('#chat-'+chatid+' ul.thread-content');
	//				console.log('#circle-'+chatid+' ul.thread-content');
	if(!htmlcheck) 
	{
		window.setTimeout(addObserverIfDesiredNodeAvailable3(chatid),2000);
		return;
	}
	var visitor = "";
	var contentgood = "";
	for(var iss = 0; iss<= htmlcheck.childNodes.length;iss++)
	{
		var toinvestigate  = htmlcheck.childNodes[iss].previousSibling;
		if(toinvestigate != null && typeof  toinvestigate.className !== "undefined")
		{	
			var classes = toinvestigate.className;
			if(classes.includes('visitor'))
			{
				visitor = toinvestigate.querySelector('.message-wrapper span.author').textContent;
				break;
			}
		}
	}
	var sections = document.querySelectorAll('.user-symbol-container');
	for (i = 0; i < sections.length; i++)
	{
		var parentele = sections[i].parentElement;
		if(parentele.querySelector('div.users') != null)
		{
			var user =  parentele.querySelector('div.users').textContent
			if(user == visitor)
			{
				parentele.click();
				var objDiv = document.querySelector('#chat-'+chatid+' div.chat-content');
				objDiv.scrollTop = objDiv.scrollHeight;
			}
		}
	}
	//targetx.click();
}

function addObserverIfDesiredNodeAvailable2(chatid) 
{
	var sections = document.querySelectorAll('.meshim_dashboard_components_ChatPanel.chat_panel');
	for (i = 0; i < sections.length; i++){
		sections[i].classList.remove('active');
		sections[i].style.display = 'none';
	}
	const targetx = document.querySelector('[__jx__id="___$_'+ chatid +'__chats__content"]').closest(".meshim_dashboard_components_ChatPanel.chat_panel");//
	if(!targetx) 
	{
		window.setTimeout(addObserverIfDesiredNodeAvailable2(chatid),2000);
		return;
	}
	targetx.classList.add("active");
	targetx.style.display = 'block';
	var objDiv = document.querySelector('[__jx__id="___$_'+ chatid +'__chats__content"]').closest(".jx_ui_html_div.chat_log_container")
	objDiv.scrollTop = objDiv.scrollHeight;
	
}

function sendmessage(obj,chrome)
{		
	chrome.runtime.sendMessage(obj);					
}
