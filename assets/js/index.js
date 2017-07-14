$(document).ready(function(){
    //Evento click del botón registrar//
    $('.botonsesion').click(function(){
        validateForm();   
    });

    //Función que se ejecuta al presionar el botón registrar//
    function validateForm(){
        //Expresiones regulares para validar name, lastname y formato email//
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var contrasena = /^[0-9]+$/;

        //Valores de los input//
        var email = $('#input-email').val();
        var password = $('#input-password').val();

        //Arreglo con los valores a usar en el ciclo//
        var inputVal = new Array(email, password);
        //Arreglo con las palabras a reemplazar en el if//
        var inputMessage = new Array("email", "contraseña");

         $('.error').hide();
        //Validación email vacío//
            if(inputVal[2] == ""){
                $('#input-email').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[2] + '</span>');
            } //Validación formato email correcto//
            else if(!emailReg.test(email)){
                $('#input-email').after('<span class="error"> Por favor, ingresa un email válido.</span>');
            }else if(inputVal[3] == ""){//Validación contraseña vacía//
            $('#input-password').after('<span class="error"> Por favor, ingresa una ' + inputMessage[3] + '</span>');
            } //Validación contraseña debe tener máximo 8 numeros//
            else if(($('#input-password').val()).length > 8){
            $('#input-password').after('<span class="error"> Se necesitan máximo 8 números</span>');
            }//Validación contraseña sólo números//
            else if($('#input-password').val() == contrasena){
               $('#input-password').after('<span class="error"> Debes ingresar sólo números</span>');
            }else{
                window.location = "home.html";
            }
        }

});