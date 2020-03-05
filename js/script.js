$(document).ready(function () {
    $('#pulsante').click(function () {
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

})
