var mainlist= document.querySelectorAll('#main-list a');
var interval;
for(var i=0;i<mainlist.length;i++){
	mainlist[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetsectionID=this.textContent.trim().toLowerCase();
    var targetsection=document.getElementById(targetsectionID);
    interval=setInterval(function(){
    var targetsectioncoordinates=targetsection.getBoundingClientRect();
    if(targetsectioncoordinates.top <=0){
    	clearInterval(interval);
    	return;
    }
    window.scrollBy(0,50);
    },20);
	});
}
var progressbars=document.querySelectorAll('.skill-progress > div');
var skillcontainers=document.getElementById('skillcontainer');
window.addEventListener('scroll',checkScroll);
var animation=false;
function initialiseBars(){
	for(let bar of progressbars){
    bar.style.width=0+'%';
	}
}
initialiseBars();
function fillbars(){
	for(let bar of progressbars){
	let targetwidth=bar.getAttribute('data-bar-width');
	let currentwidth=0;
	let interval=setInterval(function(){
		if(currentwidth>targetwidth){
			clearInterval(interval);
			return;
		}
		currentwidth++;
        bar.style.width=currentwidth +'%';
	},5);
	}
}
function checkScroll(){
	var coordinates=skillcontainers.getBoundingClientRect();
	if(!animation && coordinates.top <= window.innerHeight){
		animation=true;
		fillbars();
	}
	else if(coordinates.top > window.innerHeight){
		initialiseBars();
		animation=false;
	}
}

