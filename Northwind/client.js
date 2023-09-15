$(function(){
    $('.code').on('click', function(e) {
        // display selected product info
              const product_name = $(this).data('product');
              const product_code = $(this).data('code');
              $('.toast-header .mr-auto').text(product_name);
              $('#code').text(product_code);    
             // alert(product_name + " " + product_code);
        // preload audio
        var toast = new Audio('toast.wav');
        e.preventDefault();
         // first pause the audio (in case it is still playing)
         toast.pause();
         // reset the audio
         toast.currentTime = 0;
            // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $('#liveToast').toast({ autohide: false }).toast('hide');;
    }
});