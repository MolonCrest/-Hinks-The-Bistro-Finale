
$(document).ready(function () {
    var thumbs = $('.gallery-thumb');


    thumbs.on('click', function () {
        var thumb = $(this),
            gallery = thumb.closest('.jquery-gallery'),
            bigImage = gallery.find('.gallery-main');

        bigImage.attr({
            src: thumb.attr('src'),
            alt: thumb.attr('alt')
        });


        gallery.find('.gallery-thumb').removeClass('active-thumb');
        thumb.addClass('active-thumb');
    });


});
