$(document).ready(function () {

    // Backstrtch jQuery function call to load fullscreen background image
    $.backstretch('img/ocean.jpg');
    // LetteringJS jQuery function call to affect elements designated with a class of fancy-title
    $('.fancy_title').lettering();

    // Custom jQuery function to creaet a toggle button and append it to the header
    $('<button class="toggle1">Toggle Headshot</button>').appendTo('header');
    // Custom jQuery function to listen for the toggle button click event, and then slideToggle the image with a class of mugshot for a duration of 2 seconds
    $('button.toggle1').on('click', function () {
        $('.mugshot').slideToggle(2000);
    });

});
