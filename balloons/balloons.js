$(function(){
    //change header when page loads
    $(document).on('load', changeHappyBirthday());

    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#select-all').on('change', allBalloons())

    changeColors();
});

// change happy birthday animation
function changeHappyBirthday() {
    const animations = ['animate__bounce', 'animate__flash', 'animate__pulse', 'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__headShake', 'animate__swing', 'animate__tada', 'animate__wobble', 'animate__wobble', 'animate__heartBeat'];
    const animation = animations[Math.floor(Math.random()*animations.length)];

    $('.happyBirthday').removeClass().addClass('animate__animated ' + animation);
}



//show Toast if none are checked
function noCheckToast() {
    if ($('.form-check-input').is(":checked")) {
    }
    else {
        $('#liveToast').toast({ autohide: true}).toast('show');
    }
    
}

// check/uncheck all balloons
function allBalloons(){
    // selects all, but cant get all three balloons to come down and up with check/uncheck all
    $('#select-all').on('change', function () {
        var checkboxes = document.getElementsByClassName('form-check-input');
            for (var checkbox of checkboxes) {
                checkbox.checked = this.checked;     
            }
            $('#redImg').css('visibility', 'visible')
            $('#greenImg').css('visibility', 'visible')
            $('#blueImg').css('visibility', 'visible')
    })       
}


//change colors on mouseover
function changeColors() {
    const HB = document.getElementById("happyBirthdayTitle");
    const redCheckLabel = document.getElementById('redLabel')
    const greenCheckLabel = document.getElementById('greenLabel')
    const blueCheckLabel = document.getElementById('blueLabel')


    // mouse enter for each color
    redCheckLabel.addEventListener("mouseenter",(event) => {
        HB.style.color = "red";
    }, false, );

    greenCheckLabel.addEventListener("mouseenter",(event) => {
        HB.style.color = "green";
    }, false, );

    blueCheckLabel.addEventListener("mouseenter",(event) => {
        HB.style.color = "blue";
    }, false, );

    // // mouse leave for each color
    redCheckLabel.addEventListener("mouseleave",(event) => {
        HB.style.color = "slategray";
    }, false, );

    greenCheckLabel.addEventListener("mouseleave",(event) => {
        HB.style.color = "slategray";
    }, false, );


    blueCheckLabel.addEventListener("mouseleave",(event) => {
        HB.style.color = "slategray";
    }, false, );
}

