/*-- - Script necesario para activar el tooltips, y darle formato al title*/

//Tooltips
$(function() {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
        $('.carousel').carousel({
            interval: 2000
        })
        $('#carouselRio').carousel({
            interval: 3000
        })
        $('#exampleModal').on('show.bs.modal', function(e) {
            console.log('el modal contacto se esta mostrando')

            $('#btnModalContact').removeClass('btn-primary')
            $('#btnModalContact').addClass('btn-success')
            $('#btnModalContact').prop('disabled', true)
        })
        $('#exampleModal').on('shown.bs.modal', function(e) {
            console.log('el modal contacto se mostro')
        })
        $('#exampleModal').on('hide.bs.modal', function(e) {
            console.log('el modal contacto se esta ocultado')
        })
        $('#exampleModal').on('hidden.bs.modal', function(e) {
            console.log('el modal contacto se oculto')

            $('#btnModalContact').removeClass('btn-success')
            $('#btnModalContact').addClass('btn-primary')
            $('#btnModalContact').prop('disabled', false)
        })
    })
    /*
    $(function() {
        $('#carouselRio').carousel({
            interval: 5000
        })
    })*/