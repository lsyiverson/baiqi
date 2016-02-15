import gulp from 'gulp';
import gutil from 'gulp-util';

const TASK_NAME = 'demo';

function demo() {
  gulp.src(`${gulp.config('root.src')}/assets/*.*`)
    .pipe(gulp.dest(`${gulp.config('root.dist')}/assets`))
}

export default gulp.task(TASK_NAME, demo);