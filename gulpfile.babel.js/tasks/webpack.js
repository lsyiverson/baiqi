import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'gulp-webpack';

const TASK_NAME = 'webpack';

function startWebpack() {
  gulp.src(`${gulp.config('root.src')}/app/index.js`)
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest(`${gulp.config('root.dist')}/js`));
}

export default gulp.task(TASK_NAME, startWebpack);