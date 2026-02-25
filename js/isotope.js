$(document).ready(function() {
    // Inicializar Isotope en el contenedor de la galería
    var $portfolioIsotope = $('.map-fraccionas').isotope({
        itemSelector: '.col-fraccionas',
        layoutMode: 'fitRows'
    });

    // Manejar clics en los filtros
    $('#fraccion-filter li').on('click', function() {
        // Quitar la clase 'active' de todos los filtros
        $('#fraccion-filter li').removeClass('active');
        // Añadir la clase 'active' al filtro seleccionado
        $(this).addClass('active');

        // Filtrar los elementos en el contenedor de galería
        var filterValue = $(this).attr('data-filter');
        $portfolioIsotope.isotope({ filter: filterValue });
    });
});