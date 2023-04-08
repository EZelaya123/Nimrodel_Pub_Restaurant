
// Funcion aplicada al formulario de Reserva
$(document).ready(function(){
    $("#boton2").click(function(){
        var nombre = $('#nombre2').val();
        var cantidad_de_asistentes = $('#cantidad_de_asistentes').val(); 
        var correo = $('#correo2').val();
        alert("Estimado:" +" "+ nombre + " "+ "agradecemos por reservar con nosotros. Hemos registrado" + " " + cantidad_de_asistentes + " " + "asistentes. Se ha enviado el codigo de confirmacion al correo" + " " + correo + " " + " \nGracias por preferirnos.");
    });
})  


function Comuniquemonos(){ 
     document.getElementById('formulario1').classList.remove("d-sm-none"); 
    
 }

 function Reserva(){ 
 document.getElementById('formulario2').classList.remove("d-sm-none"); 
 }

// Funcion de Pop up aplicada a tarjetas
$(document).ready(function () {
    $('#open').on('click', function () {
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').on('click', function () {
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

$(document).ready(function () {
    $('#open2').on('click', function () {
        $('#popup2').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close2').on('click', function () {
        $('#popup2').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});


$(document).ready(function () {
    $('#open3').on('click', function () {
        $('#popup3').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close3').on('click', function () {
        $('#popup3').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});

// Funcion de Pop up aplicada a texto "Sobre Nosotros"

$(document).ready(function () {
    $('#openC').on('click', function () {
        $('#popupC').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#closec').on('click', function () {
        $('#popupC').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
});
