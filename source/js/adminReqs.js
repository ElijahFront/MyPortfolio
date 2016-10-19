(function AdminUpdate() {

    function sendXHR(url, data){

        $.ajax({
            type: 'POST',
            url: url,
            data: data
        })
    }

    $('#admin__save_skills').on('click', function (e) {
        e.preventDefault();



        var html = $('#admin__html').val(),
            css = $('#admin__css').val(),
            js = $('#admin__js').val(),
            php = $('#admin__php').val(),
            node = $('#admin__node').val(),
            mongo = $('#admin__mongo').val(),
            git = $('#admin__git').val(),
            gulp = $('#admin__gulp').val(),
            bower = $('#admin__bower').val();
        if (html == ''||css == ''||php == ''||node == ''||mongo == ''||git == ''||gulp == ''||gulp == ''||bower == ''){
            alert('Пожалуйста, не оставляйте пустые поля')
        } else {

            var SkillsData = {
                html: html,
                css: css,
                js: js,
                php: php,
                node: node,
                mongo: mongo,
                git: git,
                gulp: gulp,
                bower: bower
            };


            //sendXHR('/skillsPost', SkillsData);
            $.ajax({
                type: 'POST',
                url: '/skillsPost',
                data: SkillsData,
                statusCode:{
                    200 : function () {
                        alert('Скилы сохранены!');
                        $('#admin__html').val('');
                        $('#admin__css').val('');
                        $('#admin__js').val('');
                        $('#admin__php').val('');
                        $('#admin__node').val('');
                        $('#admin__mongo').val('');
                        $('#admin__git').val('');
                        $('#admin__gulp').val('');
                        $('#admin__bower').val('');
                    }
                }
            })
        }

    });

    $('#admin__save_blog').on('click', function (e) {

        e.preventDefault();

        var title = $('.admin__blog_form-title').val(),
            date = $('.admin__blog_form-date').val(),
            text = $('.admin__blog_form-text').val();

        var blogData = {
            title: title,
            date: date,
            text: text
        };

        //sendXHR('/saveBlogArticles', blogData)
        $.ajax({
            type: 'POST',
            url: '/saveBlogArticles',
            data: blogData,
            statusCode:{
                200 : function () {
                    alert('Статья сохранена!');
                    $('.admin__blog_form-title').val('');
                    $('.admin__blog_form-date').val('');
                    $('.admin__blog_form-text').val('');
                }
            }
        })

    });

    $('#save_work').on('click', function (e) {

        e.preventDefault();

        alert('Извините, данный функционал пока в разработке. Попробуйте написать статью в блог')
    })

}());