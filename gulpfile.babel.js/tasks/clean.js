import gulp from 'gulp';
import del from 'del';

const TASK_NAME = 'clean';

function clean() {
  const src = [
    gulp.config('root.dist')
  ];

  del.sync(src);
}

export default gulp.task(TASK_NAME, clean);