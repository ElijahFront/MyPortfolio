(function adminTabs() {

    var windows = $('.admin__main'),
        tabs = $('.tabs__item_link');

    tabs.on('click', function (e) {
        e.preventDefault();

        var liAct = $(this).parent();


        if (!liAct.hasClass('active')){
            $('.tabs__item').removeClass('active');
            liAct.addClass('active');

        }
        var indexOfActLi = $('.tabs__item.active').index();
        windows.hide();
        windows.eq(indexOfActLi).show();
    })

}());