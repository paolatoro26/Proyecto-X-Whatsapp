//Ingresar mensaje

function persona (_avatar, _nombre)
{
	this.avatar =_avatar;
	this.nombre=_nombre;
}

function mensaje(_mensajeIn,_mensajeOut)
{
	this.mensajeIn=_mensajeIn;
	this.mensajeOut=_mensajeOut;
}

function whatsapp()
{	
	this.buscar= function()
	{
		var search = document.getElementById("search");
		var contacto = document.getElementsByTagName("h4");
		var forEach = Array.prototype.forEach;

		search.addEventListener("keyup", function(e){

		var choice = this.value;

		forEach.call(contacto, function(f)
			{
	    		if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
	        {
	        	f.parentNode.parentNode.style.display = "none"; 	
	        }
	    		else
	     	{
	     		f.parentNode.parentNode.style.display = "block"; 
	     	}
	               
		});
	}, false);
}
	this.fecha=function
	{
		var actual=new Date();
		var hora=actual.getHours();

		return hora;
	}
}

//Buscador de nombres



//

/*
//Ingresar el texto del input de mensajes.

  	var fecha = new Date();
	var	hora = fecha.getHours();

inputMensaje.addEventListener("keydown", subirMensaje);

function agregar()
{
	var input=document.querySelector(".w-write-message-field").value;
	var divChatIn= document.querySelector(".w-message w-message-out");
}
	
	
}


function subirMensaje(evt)
{
	console.log(evt.keyCode);	
}
*/





