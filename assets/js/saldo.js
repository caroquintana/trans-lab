$(document).ready(function() {
//Misión: Imprimir saldos en el html
    //aquí capturo el valor el input
    $('.btnversaldo').click( function(){
    	$('.titulosaldo').hide('');
    	$('.montototal').hide('');
    	var inputTarjeta = $('#ingresotarjeta').val();
    	console.log(inputTarjeta);
    	$('#ingresotarjeta').val('');
	    	//aquí hago una llamada ajax
	    $.ajax({
	    	url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + inputTarjeta,
	    	type: 'GET',
	    	dataType: 'json',
	    	data: {limit: '800'},
	    })
	    .done(function(saldo) {
	    	console.log("success");
	    	console.log(saldo);
	    	$('.saldototal').append('<div class="titulosaldo"><h3>SALDO INICIAL</h3></div><div class="montototal"><p>'+ saldo.saldoTarjeta + '</p>');	
	    })
	    .fail(function() {
	    	console.log("error");
	    })
	    .always(function() {
	    	console.log("complete");
	    });

    });      
});

