function Chat(mensaje){
	this.mensaje = mensaje;
}
Chat.arr = [];
Chat.aceptar = function(){
	var mensaje = document.getElementById("mensaje").value;
	var todoMensaje = new Chat(mensaje);

	Chat.arr.push(todoMensaje);
	Chat.borrar();
	Chat.mostrar();
	Chat.guardar();
}
Chat.borrar = function (){
	var mensaje = document.getElementById("mensaje");
	mensaje.value = "";

}
Chat.mostrar = function(){
	var comentarios = "";
	Chat.arr.map(function(elemento, indice){
	comentarios= comentarios + "<p>" + elemento.mensaje + "</p <br>";

	});
	document.getElementById("comentarios").innerHTML = comentarios;
}

Chat.guardar = function(){
	var arr = Chat.arr;
	var arrEncode = JSON.stringify(arr);
	localStorage.setItem("arr", arrEncode);
}
Chat.obtenerArr = function() {
	var arrEncode = localStorage.getItem("arr");
	console.log(arrEncode);
	if(arrEncode != null)
	{
		var arr = JSON.parse(arrEncode);
		Chat.arr = arr;
	}else{
		var arrr = JSON.parse(arrEncode);
		Chat.arr = [];
	}
}
Chat.obtenerArr();
Chat.mostrar();