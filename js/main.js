
var input=document.querySelector(".w-search-contacts");

input.addEventListener("click", eliminarPlaceholder);

function eliminarPlaceholder (evt)
{	
		evt.target.setAttribute("placeholder","");
}