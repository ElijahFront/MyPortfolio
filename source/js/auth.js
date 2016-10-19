(function Login() {

    function sendLoginXHR(data, url){
        $.ajax({
            type: 'POST',
            data:data,
            url:url,
            statusCode: {
                200: function () {
                    window.location.href = '/admin'
                },
                403: function () {
                    alert('Access not permitted')
                }
            }
        })
    }

    $('.btn-enter').on('click', function (e) {
        e.preventDefault();

        var login = $('.input-log').val(),
            pass = $('.input-password').val(),
            check = $('#human').prop('checked'),
            radio = $('#y-rob').prop('checked');

        var data = {
            login: login,
            password: pass
        };
        if (!check || !radio){
            alert('Роботам тут не место!')
        } else if (login == ''){
            $('.input-log').css({'border':'1px solid red'})
        } else if (pass == ''){
            $('.input-password').css({'border':'1px solid red'})
        } else {
            sendLoginXHR(data, '/login');
            console.log(data)
        }
    })

}());