/*function Chat()
{
	this.nombre = '';
	this.people = [];
	this.messages = [];
	this.chatAvatar = '';
}
 
function Person(_name, _avatar)
{
	this.name = _name;
	this.avatar = _avatar;
}
function Message(_message, _sender)
{
	this.message = _message;
	this.sender = _sender;
	this.received = false;
}
function Whatsapp()
{
	
	this.chats = [];
	this.selectedChat = null;
	this.searchChat		= function(_keyword){};
	this.getChatFromId	= function(_chatId){};
	this.drawChatList	= function(_htmlTarget){
		
	};
	this.drawMessageList= function(){
		var divChat = document.getElementById('chat');
		divChat.innerHTML = '';

		for (var i in this.selectedChat.messages) {
			if (object.hasOwnProperty(i)) {
				console.log(this.selectedChat.messages[i]);
				this.sendMessage(this.selectedChat.messages[i], false);
			}
		}
	};
	this.getLastMessage = function(){
		return this.selectedChat.messages[this.selectedChat.messages.length-1];
	};
	this.sendMessage	= function(_message, _in){
		var fecha = new Date();
		var	hora = fecha.getHours()+":"+fecha.getMinutes();
		var htmlMessageIn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">' + hora + '</div></div></div>';
		var htmlMessageOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _message.message + '</p><div class="time">' + hora + '</div></div></div>';
		var divChat = document.getElementById('chat');

		this.selectedChat.messages.push(_message);

		if(_in)
		{
			divChat.innerHTML += htmlMessageIn;
		}else{
			divChat.innerHTML += htmlMessageOut;
		}

		divChat.scrollTop = divChat.scrollHeight;
	};
}


var wapp = new Whatsapp();

var me = new Person('Gerson');
var zare = new Person('Zare');

var chat = new Chat();

chat.people.push(zare);

wapp.chats.push(chat);
wapp.selectedChat = chat;

wapp.sendMessage(new Message('Hola', zare));
wapp.sendMessage(new Message('Que tal?', me));

console.log(wapp.getLastMessage().sender);


window.onload = init;

var inputMessage;
var divChat;
var chatPanel;

function init()
{
	inputMessage = document.getElementById('mensajes');
	divChat = document.getElementById('chat');
	//chatPanel = document.querySelector('.w-chat-panel');

	inputMessage.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt)
{
	console.log(evt.keyCode);
	if(evt.keyCode == 13)
	{
		wapp.sendMessage(new Message(evt.target.value, me));
		evt.target.value = '';
	}
}



//Buscador de nombres



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
//

//-----------------------------------------------------------
//Ingresar el texto del input de mensajes.


var input=document.getElementById("mensajes");
var chat=document.getElementById("chat");
var mensajeOut = '<div class="w-message w-message-out"><div class="w-message-text"><p>' + input.value + '</p><div class="time">14:27</div></div></div>';


input.addEventListener("keydown", subirMensaje);

function subirMensaje(evt)
{
	if( evt.keyCode == 13)
	{
		agregar();
	}
}

function agregar()
{
	chat.push(mensajeOut);
	input.value="";
}
	*/
	
// Parte Logica
var listaChats = [
	{ nombre: "Chat1", 
	  imageURL:"image/logocodeacademy.png", 
	  ultimoMensaje:"", 
	  horaUltimoMensaje:"",
	}listachats
	  ];

//Parte Visual-interactua con el interfaz


crearMensaje();
onMensajeKey();

var liListItem=null;


function init()
{
	initChatList();

}

function initChatList ()
{
	var elListaChats=document.getElementById("listaChats");
	for (var i dataListaChats)
	{
		
		console.log(listachats.nombre);
	}
	setEventsChatList();
}


function setEventsChatList()
{
	var listaChats=document.getElementById("listachats");
	//console.log( listaChats.getElementsByTagName("li"));
	var arrListItem=listaChats.getElementsByTagName("li");
	for (var i=0; i<arrListItem.length; i++)
	{
		//console.log(arrListItem[i]);
		arrListItem[i].onclick= function(){
			alert("click");
		}
		arrListItem[i].addEventListener("click", //function(){alert("click Listener")}
			onChatItemClick);

	}
}

function onChatItemClick(evt)
{
	
	//console.log(evt.current.target);//referencia al li
	var contactName=evt.current.target.getElementsByClassName("w-contact-name")[0].textContent;
	var imagenURL=evt.current.target.getElementsByClassName("wh-44")[0].src;//si le doy [0] y solo hay un elemento me aparece "error"
	actualizarCabeceraChat(contactName,imagenURL);

}
function onMensajeKey(evt)
{
	if(evt.keyCode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");
		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);	
		elInputMensajes.value="";	
	}	
}

function crearMensaje(_mensaje)
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

function crearChat(_mensaje)
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
}

function crearListaChats()
{

}

function actualizarCabeceraChat(_contactName, _imagenURL, _estado)
{
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName("w-contact-name")[0].innerHTML=_contactName;	
	chatHeader.getElementsByClassName("w-users-messages")[0].innerHTML=_estado;
	chatHeader.getElementsByClassName("image")[0].img=_imagenURL;
}
