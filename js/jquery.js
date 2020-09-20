$(document).ready(function () {

    $(".product-hero").mousemove(getMousePosition);

    function getMousePosition(event) {
        let elementVisible = $('.product-hero-image:visible');
        let imageTop = elementVisible.offset().top;
        let imageLeft = elementVisible.offset().left;
        let imageBottom = imageTop + elementVisible.height();
        let imageRight = imageLeft + elementVisible.width();

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        if (mouseY < imageTop || mouseY > imageBottom) {
            return;
        }
        // console.log("mouseY")
        // console.log(mouseY);
        // console.log("mouseX")
        // console.log(mouseX);
        elementVisible.hide();

        //   LEFT
        if (mouseX >= 325 && mouseX <= 1020 && mouseY >= 250 && mouseY <= 530) {
            $('.product-hero-image.left').show();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
        //   MIDDLE
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY >= 250 && mouseY <= 500) {
            $('.product-hero-image.middle').show();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
        //   RIGHT
        else if (mouseX >= 1340 && mouseY >= 250 && mouseY <= 500) {
            $('.product-hero-image.right').show();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
        //   top left
        else if (mouseX >= 325 && mouseX <= 1020 && mouseY <= 250) {
            $('.product-hero-image.left').hide();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').show();
            $('.product-hero-image.top-right').hide();
        }
        //   top RIGHT
        else if (mouseX >= 1340 && mouseY < 250) {
            $('.product-hero-image.right').hide();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').show();
        }
        //   TOP
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY < 250) {
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').show();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }

        //   Bottom
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY > 500) {
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').show();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
        // Bottom Left
        else if (mouseX >= 325 && mouseX <= 1020 && mouseY > 530) {
            $('.product-hero-image.left').hide();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').show();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
        //   top RIGHT
        else if (mouseX >= 1340 && mouseY > 530) {
            $('.product-hero-image.right').hide();
            $('.product-hero-image.middle').hide();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').show();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        } 
        else {
            $('.product-hero-image.middle').show();
            $('.product-hero-image.left').hide();
            $('.product-hero-image.right').hide();
            $('.product-hero-image.bottom').hide();
            $('.product-hero-image.bottom-left').hide();
            $('.product-hero-image.bottom-right').hide();
            $('.product-hero-image.top').hide();
            $('.product-hero-image.top-left').hide();
            $('.product-hero-image.top-right').hide();
        }
    }

    $('.product-hero-image').css('z-index', '0');


});

//   if (mouseX > 325 &&  mouseX < 1000 && mouseY < 90 && mouseY >500){
//     $('.product-hero-image.middle').show();
//     $('.product-hero-image.left').hide();
//     $('.product-hero-image.right').hide();
//     $('.product-hero-image.bottom').hide();
//     $('.product-hero-image.bottom-left').hide();
//     $('.product-hero-image.bottom-right').hide();
//     $('.product-hero-image.top').hide();
//     $('.product-hero-image.top-left').hide();
//     $('.product-hero-image.top-right').hide();
//   }
//   else if (mouseX < imageLeft) {
//     $('.product-hero-image.left').show();
//     $('.product-hero-image.middle').hide();
//     $('.product-hero-image.right').hide();
//   }
//   else {
//     $('.product-hero-image.right').show();
//     $('.product-hero-image.middle').hide();
//     $('.product-hero-image.left').hide();
//   }

