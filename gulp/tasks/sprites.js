/**
 * Created by Worker on 11.06.2016.
 */
var svgConfig = {
    mode: {
        css: {		// Activate the «css» mode
            render: {
                css: true	// Activate CSS output (with default options)
            }
        }
    }
};

module.exports = function () {
    $.gulp.task('sprites', function () {
        return $.gulp.src('./source/svg_try/*.svg')
            .pipe($.gp.svgSprite(svgConfig))
            .pipe($.gulp.dest($.config.root + '/assets/img/sprites'))
        
    })
};