
//Desaparecer placeholder en input de busqueda.

var inputBuscar=document.querySelector(".w-search-contacts");
inputBuscar.addEventListener("focus", eliminarPlaceholder);

function eliminarPlaceholder (evt)
{	
		evt.target.placeholder="";
}

//Ingresar el texto del input de mensajes.

var inputMensaje = document.querySelector(".w-write-message-field");
var divChatIn = document.querySelector(".w-message w-message-out");
var fecha = new Date();
var hora = fecha.getHours();

inputMensaje.addEventListener("keyup", subirMensaje);

function subirMensaje(evt)
{
	if(evt.keyCode==13)
	{

	}
}




