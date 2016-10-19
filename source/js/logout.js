(function () {

    $('#logout').on('click', function (e) {

        e.preventDefault();

        $.ajax({
            url:'/logout',
            type:'POST',
            statusCode:{
                200:function () {
                    window.location.href = '/'
                }
            }
        })
    })

}());