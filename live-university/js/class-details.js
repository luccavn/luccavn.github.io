$(document).ready(function() {
    $('.class-details').click(function(e) {
        $('#content').load('details.html').hide().fadeIn('slow');
        e.preventDefault();
    });
});