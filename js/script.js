$(document).ready(function () {

    var source = $('#messaggio-template').html();              // clono il template messaggio
    var template = Handlebars.compile(source);

    function creaMsg(prima, seconda, testoMsg) {
        var datiMessaggio = {                                 // Assemblo in un oggetto il contenuto del messaggio
            prima: prima,
            seconda: seconda,
            testo: testoMsg
        };

        var templateMessaggio = template(datiMessaggio);      // Popolo il template di handlebars con il contenuto del messaggio
        $('.main-right').append(templateMessaggio);// faccio l'append del template così popolato
    }


    $('#send').click(function () {

        $('.micro').show();
        $('.send').hide();
        var nomeImput = $('#scrivi').val();
        $('#scrivi').val('');
        console.log(nomeImput);

        creaMsg('color', 'verde', nomeImput)

        setTimeout(function () {
            creaMsg('color-b', 'bianco', 'ok')
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

            if($('#scrivi').val() === ('')){
                $('.micro').show();
                $('.send').hide();
            }

            if (event.keyCode === 13) {
                $("#send").click();
            }

        /*}
        else {
            $('#pulsante').show();
            $('send').hide();
        }*/

    })


    $('.scheda').click(function () {


        var utente = $(this).data('codice');

        $('.schedabis').each(function () {

            if( utente == $(this).data('codice') ){

                $('.schedabis').addClass('hide');
                $('.schedabis').removeClass('flex');
                $(this).removeClass('hide');
                $(this).addClass('flex');

            }


        })

        $('.main-right').each(function () {

            if( utente == $(this).data('codice') ){

                $('.main-right').addClass('hide');

                $(this).removeClass('hide');


            }


        })


    })





    $(document).on('click', '.chevron', function() {

        if ($(this).parent().find('.tendina').is(':visible')) {

            $(this).parent().find('.tendina').hide();



        }
        else {
            var tendina = $('.template .tendina').clone();
            $('.tendina').hide();
            $(this).parent().append(tendina);
            $(this).parent().find('.tendina').show()
            $('.overlay').show();

        }

    })


    $(document).on('click', '.overlay', function() {
        $('.tendina').hide();
        $('.overlay').hide();
    })









    $(document).on('click', '.delete', function() {
        console.log('ciao');

        $(this).parent().parent().parent().hide();
        $('.overlay').hide();



    });








})
