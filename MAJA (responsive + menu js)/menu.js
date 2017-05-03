$(".sub-menu").click(function(){
	$(this).children("ul").slideToggle();
})

//al hacer click en un li, hago click tambien en el ul- su padre por eso se vuelve a ocultar//
//detener la propagacion de eventos//

$("ul").click(function(sub){
	sub.stopPropagation();	
})
