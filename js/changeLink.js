// play with jQuery
$('body').hide().fadeIn(3000);

// hide all the images, hide all the links
//$('img').hide();
//$('a').hide();

// test the event
$('h1').click(hidesection);
function hidesection() {
    $(this).text("Hiding.....");
    $('body').children('p').slideToggle();
}

/*$('img').click(toggleImg);
function toggleImg() {
    $('img').slideToggle();
}*/

// test the each
$('a').each(change);
function change() {
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href', "https://www.google.com");
}