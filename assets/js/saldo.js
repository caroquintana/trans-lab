$(document).ready(function() {
	
	$('.btnversaldo').click( function(){
    	$('.titulosaldo').hide('');
    	$('.montototal').hide('');
    	//aqui capturo el valor del input
    	var inputTarjeta = $('#ingresotarjeta').val();
    	console.log(inputTarjeta);
    	$('#ingresotarjeta').val('');
	    	//aquí hago una llamada ajax
	    $.ajax({
	    	url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + inputTarjeta,
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