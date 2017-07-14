$(document).ready(function() {

//Funcionalidades de Materialize
    $(".button-collapse").sideNav();
    $('select').material_select();

//Localstorage email (no funciona :c )

	//al hacer click, introducir en emailperfil, localStorage.mail
  	$('.botonsesion').click( function(){
  		var valorMail = $("#input-email").val();
  		localStorage.setItem("valorMail", valorMail);
  	});
  	//cuando haga click en la casilla emailperfil inserta el valorMail
  	$('#email').click(function() {
  		$('#email').val(localStorage.getItem("valorMail"));
	});

//localStorage tarjetas perfil.html (si funciona! )     
    $('a.waves-effect.waves-light.btn.boton.btnagregartarj').click( function(){
        //tomo el valor
        var inpTarj = $('.inputnumta').val();
        //guardo el valor
        localStorage.setItem("inpTarj", inpTarj);
        //imprimo el valor y limpio el campo
        $('.tarjetasnuevas').append('<p class="tarjetasingresadas">' +localStorage.getItem("inpTarj") + '</p>');
        $('.inputnumta').val('');
    });

});

