$(document).ready(function () {

    $(".product-hero").mousemove(getMousePosition);

    function getMousePosition(event) {
        let elementVisible = $('.product-hero-image:visible');
        let imageTop = elementVisible.offset().top;
        let imageLeft = elementVisible.offset().left;
        let imageBottom = imageTop + elementVisible.height();
        let imageRight = imageLeft + elementVisible.width();

        var mouseX = event.clientX;
        var mouseY = event.clientY;

        if (mouseY < imageTop || mouseY > imageBottom) {
            return;
        }
        console.log("mouseY")
        console.log(mouseY);
        console.log("mouseX")
        console.log(mouseX);
        elementVisible.hide();

        //   LEFT
        if (mouseX >= 325 && mouseX <= 1020 && mouseY >= 250 && mouseY <= 530) {
            $('.product-hero-image').hide();
            $('.product-hero-image.left').show();
        }
        //   MIDDLE
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY >= 250 && mouseY <= 500) {
            $('.product-hero-image').hide();
            $('.product-hero-image.middle').show();
        }
        //   RIGHT
        else if (mouseX >= 1340 && mouseY >= 250 && mouseY <= 500) {
            $('.product-hero-image').hide();
            $('.product-hero-image.right').show();
        }
        //   top left
        else if (mouseX >= 325 && mouseX <= 1020 && mouseY <= 250) {
            $('.product-hero-image').hide();
            $('.product-hero-image.top-left').show();
        }
        //   top RIGHT
        else if (mouseX >= 1340 && mouseY < 250) {
            $('.product-hero-image').hide();
            $('.product-hero-image.top-right').show();
        }
        //   TOP
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY < 250) {
            $('.product-hero-image').hide();
            $('.product-hero-image.top').show();
        }

        //   Bottom
        else if (mouseX >= 1020 && mouseX <= 1340 && mouseY > 500) {
            $('.product-hero-image').hide();
            $('.product-hero-image.bottom').show();
        }
        // Bottom Left
        else if (mouseX >= 325 && mouseX <= 1020 && mouseY > 530) {
            $('.product-hero-image').hide();
            $('.product-hero-image.bottom-left').show();
        }
        //   top RIGHT
        else if (mouseX >= 1340 && mouseY > 530) {
            $('.product-hero-image').hide();
            $('.product-hero-image.bottom-right').show();
        } else {
            $('.product-hero-image').hide();
            $('.product-hero-image.middle').show();
        }
    }

    $('.product-hero-image').css('z-index', '0');

    // external js: isotope.pkgd.js

    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 100
        }
    });


});