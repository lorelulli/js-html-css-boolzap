$(document).ready(function () {
    $('#send').click(function () {

        $('.micro').show();
        $('.send').hide();
        var nomeImput = $('#scrivi').val();
        $('#scrivi').val('');
        console.log(nomeImput);

        var messaggio = $('.template .color').clone();
        messaggio.find('.testo-input').text(nomeImput);
        $('.main-right').append(messaggio);

        setTimeout(function () {
            var messaggioBis = $('.template .color-b').clone();
            $('.main-right').append(messaggioBis);
        }, 1000);


    })

    $('.ricerca-contatti').keyup(function (event) {
        var lettera = $(this).val().toLowerCase();
        console.log(lettera);
        $('.txt-scheda h3').each(function () {
            if ($(this).text().toLowerCase().includes(lettera)) {
                $(this).closest(".scheda").show();

            }
            else {
                $(this).closest(".scheda").hide();
            }

        })

    })

    $('#scrivi').keyup(function (event) {

        /*var letteraBis = $(this).val();
        console.log(letteraBis);
        var lunghezzaParola = letteraBis.length();
        if (lunghezzaParola > 0) {*/
            $('.micro').hide();
            $('.send').show();

        /*}
        else {
            $('#pulsante').show();
            $('send').hide();
        }*/

    })



})
