$(document).ready(function() {
//Misión: agregar tarjetas a un contenedor ojalá con localstorage
    //aquí capturo el valor el input
    $('.btnagregartarj').click( function(){
    	localStorage.numTarj = $('.inputnumta').val();
    	console.log(localStorage.numTarj);
    	$('.inputnumta').val('');
	    	//imprimir en contenedor
	    if (localStorage.numbTarj != undefined) {
			$('.tarjetasnuevas').append('<p class="tarjetasingresadas">' + localStorage.numTarj+ '</p>');
		}

    });      
});

