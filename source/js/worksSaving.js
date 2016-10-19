(function () {

    $('#save_work').on('click', function (e) {

        e.preventDefault();

        var worksData = new FormData($('#works_form')[0]);

        $.ajax({
            type: 'POST',
            url: '/saveWorks',
            data: worksData,
            processData: false,
            contentType: false
        })
    })

}());