/**
 * Created by Worker on 12.06.2016.
 */

module.exports = function () {
    $.gulp.task('concatCSS', function () {
        return $.gulp.src('./build/assets/css/*.css')
            .pipe($.gp.concatCss("app.css"))
            .pipe($.gp.csso())
            .pipe($.gulp.dest($.config.root + '/assets/css'));
    })};
