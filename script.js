
function selectCovidshield(){
	if(!document.getElementById("c3").checked) {
		document.getElementById("c3").click();
	}
}

function select18() {
	if(!document.getElementById("c1").checked) {
	document.getElementById("c1").click();
	}


	var slots =  document.getElementsByClassName("slots-box");
	for(var i = 0; i < slots.length; i++) {
		if(slots[i].getAttribute("class").indexOf("no-seat") == -1 && slots[i].getAttribute("class").indexOf("no-available") == -1) {
			slots[i].click();
		}
	}
}

function search() {
document.getElementsByClassName("pin-search-btn")[0].click();
}

var select_covi = setInterval(selectCovidshield, 100);
var select18Int = setInterval(select18, 250);
var searchInt = setInterval(search, 1000);