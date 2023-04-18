const gulp = require('gulp')
const fontgen = require('gulp-fontgen')

const fontsFunc = () => {
    return gulp.src('src/**/*.{ttf,otf}')
        .pipe(fontgen({
            dest: 'dest/'
        })
    )
}

const fonts = (cb) => {
    fontsFunc()
    cb()
}

exports.default = gulp.series(
    fonts
)
