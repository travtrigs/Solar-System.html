var myVar = setInterval(function () {myFunction()}, 100);
function myFunction()
{
	element = document.getElementById("distance");
	element.innerHTML = (window.scrollX*1000) + " kilometers";
}