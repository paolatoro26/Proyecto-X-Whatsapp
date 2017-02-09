//Buscador de nombres de la lista
var search = document.getElementById("search");
var contacto = document.getElementsByTagName("h4");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
 var choice = this.value;

 forEach.call(contacto, function(f){
     if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
         {
         	f.parentNode.parentNode.style.display = "none";
         }
            
     else
     {
     	f.parentNode.parentNode.style.display = "block"; 
     }
               
 });
}, 
false);
	
// Parte Logica
function Chat(_nombre, _imagen)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = "";
	this.horaUltimoMensaje = '';
	/*this.borrarMensajes=function()
	{

	}*/
} 
var dataListaChats=
[
	new Chat("Gio", 'image/logocodeacademy.png'),
	new Chat("Isa", 'image/logocodeacademy.png'),
] 

//Parte Visual-interactua con el interfaz

var liListItem=null;

function init()
{
	initChatList();
}

function initChatList ()//crea la lista
{
	var elListaChats=document.getElementById("listaChats");
	for (var i in dataListaChats)
	{
		var htmlChatItem = '<li  draggable="true" ondragend="" ondragstar="inicioDrag(event)"><div class="avatar">' +
			'<img src="' + dataListaChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + dataListaChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + dataListaChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + dataListaChats[i].horaUltimoMensaje + '</div></li>';
		//dataListaChats[i].borrarMensajes();
		elListaChats.innerHTML += htmlChatItem;
	}
	setEventsChatList();
}
function inicioDrag(evt)
{
	console.log(evt);
}
function onError(error)
{
	console.log()
	localStorage//solo almacena texto.setItem(lo q quiero guardar "Geolocation","no" lo q aparecera)
}
// json ponerlo en dos lugares : donde guardo la info y 
// convertimos una cadena a formato json:JSON.stringyfy
//JSON.parse devuelve un objeto con toda la cadena q le pasa
navigator.geolocation.getcurrentPosition(showPosition, onError //callback cuando no nos permiten acceder)

function setEventsChatList()//Lista
{
	var listaChats=document.getElementById("listaChats");
	//console.log( listaChats.getElementsByTagName("li"));
	var arrListItem=listaChats.getElementsByTagName("li");
	for (var i=0; i<arrListItem.length; i++)
	{
		/*console.log(arrListItem[i]);
		arrListItem[i].onclick= function(){
			alert("click");
		}*/
		arrListItem[i].addEventListener("click", //function(){alert("click Listener")}
			onChatItemClick);
	}
}

function onChatItemClick(evt)//Header
{	
	//console.log(evt.current.target);//referencia al li
	var contactName=evt.current.target.getElementsByClassName("w-contact-name")[0].textContent;
	var imagenURL=evt.current.target.getElementsByClassName("wh-44")[0].src;//si le doy [0] y solo hay un elemento me aparece "error"
	actualizarCabeceraChat(contactName,imagenURL,"Conectado");
}

function onMensajeKey(evt)//Input
{
	if(evt.keyCode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");
		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);	
		elInputMensajes.value="";	
	}	
}

function crearMensaje(_mensaje)//Crea mi burbuja 
{
	var htmlMensajeIn =	'<div class="w-message w-message-in">'+'<div class="w-message-text">'+
						'<h5 class="yellow-1">Aldo Alfaro</h5>'+'<p>Dale dale!</p>'+
						'<div class="time">14:25</div>'+'</div>'+'</div>';
	var fecha = new Date();
	var htmlMensajeOut ='<div class="w-message w-message-out">'+'<div class="w-message-text">'+
	  					'<p>'+_mensaje+'</p>'+'<div class="time">'+fecha.getHours()+":"+fecha.getMinutes()+'</div>'+'</div>'+'</div>';

	var mensaje=liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML=_mensaje;
	console.log();

	var elemChat= document.getElementById("chat");
	elemChat.innerHTML += htmlMensajeOut;
	elemChat.scrollTop = elemChat.scrollHeight;
}

function crearChat(_mensaje)//Chat-i
{
	var elListaChats = document.getElementById("listaChats");

	if(liListItem==null)
	{
		liListItem = document.createElement("li");

		var htmlChatItem = 	'<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+
		  				'<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  				'<p class="w-last-message" id="mensaje">'+_mensaje+'</p>'+'</div>';
		liListItem.innerHTML = htmlChatItem;
		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}	
	setEventsChatList();
}

/*function crearListaChats()
{

}*/

function actualizarCabeceraChat(_contactName, _imagenURL, _estado)
{
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName("w-contact-name")[0].innerHTML=_contactName;	
	chatHeader.getElementsByClassName("w-users-messages")[0].innerHTML=_estado;
	chatHeader.getElementsByClassName("img")[0].img=_imagenURL;
}
