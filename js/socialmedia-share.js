define(['jquery'], function ($) {
    var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,resizable=yes',
        winHeight = screen.height,
        winWidth = screen.width;
    function windowpop(url, width, height) {
            
        var left, top;
        left = Math.round((winWidth / 2) - ((width / 2) + 10));
        top = 0;
 
        if (winHeight > (height + 50)) {
          top = Math.round((winHeight / 2) - ((height / 2) + 50));
        }
        //Open the window.
        window.open(url, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top + 
                                           ',screenX=' + left + ',screenY=' + top);
    }

    $('.share-twitter').on('click', function(e) {
        e.preventDefault();
        var thisPage = encodeURIComponent(window.location.href);
        var url, width = 550, height = 420;
        url = $(this).attr('href') + 'original_referer=' + thisPage + '&tw_p=tweetbutton&url=' + thisPage;
        windowpop(url, width, height);
    });

    $('.share-facebook').on('click', function(e) {
        e.preventDefault();
        var thisPage = encodeURIComponent(window.location.href);
        var url, width = 550, height = 420;
        url = $(this).attr('href') + 'u=' + thisPage;
        windowpop(url, width, height);
    });

    $('.share-linked-in').on('click', function(e) {
        e.preventDefault();
        var $this = $(this), url;
        var summary = $this.attr('data-summary'),
            source = $this.attr('data-source'),
            title = $this.attr('data-title'),
            thisPage = encodeURIComponent(window.location.href),
            width = 520,
            height = 570;
        url = $this.attr('href') + '&url=' + thisPage + '&title=' +
              title + '&summary=' + summary + '&source=' + source;
        windowpop(url, width, height);
    });

    $('.share-googleplus').on('click', function(e) {
        e.preventDefault();
        var thisPage = encodeURIComponent(window.location.href);
        var url, width = 600, height = 600;
        url = $(this).attr('href') + 'url=' + thisPage;
        windowpop(url, width, height);
    });
});