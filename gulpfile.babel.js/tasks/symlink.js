import gulp from 'gulp';
import gulpSymlink from 'gulp-symlink';
import _ from 'lodash';

const TASK_NAME = 'symlink';

function symlink() {
  const files = [
    {
      src: gulp.config('root.src'),
      dest: `node_modules/${gulp.config('root.src')}`
    },
    {
      src: 'test',
      dest: 'node_modules/test'
    }
  ];

  const src = _.map(files, (file)=> {
    return file.src;
  });

  gulp.src(_.map(files, file=> file.src))
    .pipe(gulpSymlink(_.map(files, file=> file.dest) ,{force: true}));
}

export default gulp.task(TASK_NAME, symlink);