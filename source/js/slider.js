(function () {
    var nextBtn = $('#sliderUp'),
        prevBtn = $('#sliderDown'),
        sliderItemsRight = $('.slider__pictures_list-right .slider__pict'),
        sliderItemsLeft = $('.slider__pictures_list-left .slider__pict'),
        mainPic = $('.slider__main-picture'),
        currentSlideIndex = 2,
        animationDuration = 300,
        descrList = $('.slider__description_list .slider__description_item');

    $(document).ready(function () {
        nextBtn.on('click', changeSlide);
        prevBtn.on('click', changeSlide);
    });

    function changeSlide(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.hasClass('move__control-down')){
            if (currentSlideIndex - 1 < 0){
                currentSlideIndex = sliderItemsRight.length - 1;
            } else {
                currentSlideIndex--;
            }
        } else {
            if (currentSlideIndex + 1 > sliderItemsRight.length - 1){
                currentSlideIndex = 0;
            } else {
                currentSlideIndex++;
            }
        }


        changeMainPic(sliderItemsRight);
        slideLeftPreview(sliderItemsLeft);
        slideRightPreview(sliderItemsRight);
        changeDescription();

        setTimeout(function () {
            nextBtn.attr('disabled', 'false');
            prevBtn.attr('disabled', 'false');
        }, animationDuration);

    }

    function changeDescription() {
        descrList.removeClass('active');
        descrList.eq(currentSlideIndex).addClass('active');

    }

    function changeMainPic(slideItems) {
        var nextIndexSrc = slideItems.eq(currentSlideIndex).find('img').attr('src');
        mainPic.fadeOut(function () {
            mainPic.attr('src', nextIndexSrc);
            $(this).fadeIn();
        });

    }

    function slideLeftPreview(slideItems) {
        var nextImgIndex;

        if (currentSlideIndex + 1 >= slideItems.length){
            nextImgIndex = 0;
        } else {
            nextImgIndex = currentSlideIndex + 1;
        }

        nextBtn.attr('disabled', 'true');
        prevBtn.attr('disabled', 'true');

        slideItems.filter('.active').addClass('slider__pict_to-up').removeClass('active');

        slideItems.eq(nextImgIndex).addClass('active');



        setTimeout(function () {
            slideItems.removeClass('slider__pict_to-up')
        }, animationDuration);
    }

    function slideRightPreview(slideItems) {
        var nextImgIndex;
        if (currentSlideIndex == 0){
            nextImgIndex = slideItems.length - 1;
        } else {
            nextImgIndex = currentSlideIndex - 1;
        }

        nextBtn.attr('disabled', 'true');
        prevBtn.attr('disabled', 'true');

        slideItems.filter('.active').addClass('slider__pict_to-up').removeClass('active');
        slideItems.eq(nextImgIndex).addClass('active');

        setTimeout(function () {
            slideItems.removeClass('slider__pict_to-up')
        }, animationDuration);

    }



})();