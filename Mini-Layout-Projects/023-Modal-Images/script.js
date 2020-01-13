var modal = document.getElementById("modal");

var image = document.getElementById("picture");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// img.addEventListener("click", function() {
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// 	captionText.innerHTML = this.alt;
// })
image.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}