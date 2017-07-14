$(document).ready(function() {
	
//Datos de la API con AJAX
    $('a.waves-effect.waves-light.btn.boton.btncalcular').click( function(){
    	$('.titulosado').hide('');
    	$('.montototal').hide('');
    	//aquí capturo el valor el input
    	var calculotarj = $('#nuevatarget').val();
    	console.log(calculotarj);
    	$('#nuevatarget').val('');

    	//aqui rescato el valor de la tarifa
		var optionValue = $('input.select-dropdown').val();
		console.log(optionValue);
		//pasar a numero
		var valorReal = parseInt(optionValue);
		console.log(valorReal);

	    	//aquí hago una llamada ajax
	    $.ajax({
	    	url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + calculotarj,
	    	type: 'GET',
	    	dataType: 'json',
	    	data: {limit: '800'},
	    })
	    .done(function(saldo) {
	    	console.log("success");
	    	//console.log(saldo);
	    	//aqui inserto el valor del select en costo del pasaje
	    	$('.saldototal').append('<div class="titulosaldo"><h3>COSTO PASAJE</h3></div><div class="montototal"><p>'+'$' +optionValue  + '</p></div>');	
	    	console.log(saldo.saldoTarjeta);
	    	var quitarSignos =  parseFloat(saldo.saldoTarjeta.replace(/[^0-9]/g, ''));
	    	console.log(quitarSignos);
	    	console.log(valorReal);
	    	//aqui inserto la resta entre lo que tiene la tarjeta y el valor del pasaje
	    	$('.saldototal2').append('<div class="titulosaldo"><h3>SALDO FINAL</h3></div><div class="montototal"><p>'+ '$'+(quitarSignos - valorReal)  + '</p></div>');
	    })
	    .fail(function() {
	    	console.log("error");
	    })
	    .always(function() {
	    	console.log("complete");
	    });

    });      
});

