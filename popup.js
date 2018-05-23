function onWindowLoad() 
{
	var step = "";
	var otp = "";
	document.getElementById("step").style.display = 'block';
    chrome.storage.sync.get("soundfile", function(items) { 
		if (!chrome.runtime.error) {
			if(typeof items.soundfile !== "undefined")
				document.getElementById("soundfile").value = items.soundfile;
		}
	});

    chrome.storage.sync.get("time", function(items) { 
		if (!chrome.runtime.error) 
		{
			if(typeof items.time !== "undefined")
				document.getElementById("time").value = items.time;
		}
	});
	
    chrome.storage.sync.get("otp", function(items) { 
		if (!chrome.runtime.error) 
		{
			otp = items.otp;
		}
	});
	var privaciesbutton = document.querySelector('.privacies');
	privaciesbutton.addEventListener('click', function() { 
		document.getElementById("step").style.display = 'none';
		document.getElementById("privacy").style.display = 'block';		
	}, false);
	var privacies1button = document.querySelector('.privacies1');
	privacies1button.addEventListener('click', function() { 
		document.getElementById("step").style.display = 'none';
		document.getElementById("privacy").style.display = 'block';		
	}, false);
	var backbuttonbutton = document.querySelector('.backbutton');
	backbuttonbutton.addEventListener('click', function() { 
		document.getElementById("privacy").style.display = 'none';		
		document.getElementById("step").style.display = 'block';
	}, false);
    chrome.storage.sync.get("step", function(items) { 
		if (!chrome.runtime.error) 
		{
			step = items.step;
			if(typeof step !== 'undefined')
			{
				document.querySelector('.step').style.display = 'none';
				document.getElementById("step"+step).style.display = 'block';
			}
		}
	});
	document.querySelector('#checkbox').addEventListener('change', function() { 
		if(document.getElementById("checkbox").checked){
			document.getElementById("stepbutton").removeAttribute("disabled");
		}else{			
			document.getElementById("stepbutton").setAttribute("disabled", "disabled");
		}
	});
	var submitbutton = document.querySelector('#submitbutton');
	submitbutton.addEventListener('click', function() { 
		var soundfile 	= document.getElementById("soundfile").value;
		var time 		= document.getElementById("time").value;
		var x 			= document.getElementById("toast")
		x.className 	= "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
		var y 			= document.getElementById("spinner")
		y.style.display = 'block';
		setTimeout(function(){ y.style.display = 'none'; }, 5000);
		chrome.storage.sync.set({'soundfile': soundfile,'time': time});
	}, false);
	
	var stepbutton = document.querySelector('#stepbutton');
	stepbutton.addEventListener('click', function() { 
		document.getElementById("errorbox").style.display = 'none';
		var name 	= document.getElementById("name").value;
		var email 	= document.getElementById("email").value;
		var phone 	= document.getElementById("phone").value;
		var website = document.getElementById("website").value;
		if(name.trim() == "")
		{
			document.getElementById("errorbox").innerHTML = 'Name is required';			
			document.getElementById("errorbox").style.display = 'block';
			return false;
		}
		if(email.trim() == "")
		{
			document.getElementById("errorbox").innerHTML = 'Email is required';			
			document.getElementById("errorbox").style.display = 'block';
			return false;
		}
		if(website.trim() == "")
		{
			document.getElementById("errorbox").innerHTML = 'Website is required';			
			document.getElementById("errorbox").style.display = 'block';
			return false;
		}
		document.getElementById("loading").style.display = 'block';
		var postData = {'name':name,'email': email,'phone': phone,'website': website};
		chrome.storage.sync.set(postData);
		var request 	= new XMLHttpRequest();
        request.onload 	= function() {
            var status 	= request.status;
            var data 	= JSON.parse(request.responseText);
			otp 		= data.otp;
			chrome.storage.sync.set({'name':name,'email': email,'phone': phone,'website': website,'otp':data.otp,'step':1});
			document.querySelector('.step').style.display = 'none';
			document.getElementById("loading").style.display = 'none';
			document.getElementById("step1").style.display = 'block';
        }
        request.open('POST', 'https://deskmoz.com/extension.php', true/false);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send('name='+name+'&email='+email+'&type=buzzer&phone='+encodeURIComponent(phone)+'&website='+website);		
	}, false);
	
	var otpbutton = document.querySelector('#otpbutton');
	otpbutton.addEventListener('click', function() { 
		document.querySelector('.alert').style.display = 'none';
		var otpinput 	= document.getElementById("otp").value;	
		if(otpinput == "")
		{
			document.querySelector('.otpsuccess').style.display = 'none';
			document.querySelector('.otperror').style.display = 'block';
			return false;			
		}
		if(otpinput != otp)
		{
			document.querySelector('.otpsuccess').style.display = 'none';
			document.querySelector('.otperror').style.display = 'block';
		}
		else
		{
			chrome.storage.sync.set({'step':2});
			document.querySelector('.step').style.display = 'none';
			document.getElementById("step1").style.display = 'none';			
			document.getElementById("step2").style.display = 'block';			
		}		
	}, false);
}
window.onload = onWindowLoad;