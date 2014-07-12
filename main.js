window.onload = function() {
	console.log("Started");
	var wv = document.getElementById("wv");
	wv.addEventListener('consolemessage', function(e) {
		console.log("This comes from the fragment: ", e.message);
	});
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'fragment.html', true);
	xhr.responseType = 'blob';
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var blob = new Blob([this.response], {type: 'text/html'});
			wv.src = window.URL.createObjectURL(blob);
		}
	};
	xhr.send();
};
