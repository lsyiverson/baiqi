import gulp from 'gulp';
import gutil from 'gulp-util';

const TASK_NAME = 'processHtml';

function processHtmlOnce(fileConf) {
  return gulp.src(fileConf.entry)
    .pipe(gulp.dest(fileConf.dest));
}

function processHtml() {
  const config = {
    entry: `${gulp.config('root.src')}/index.html`,
    src: [
      `${gulp.config('root.src')}/*.html`
    ],
    dest: `${gulp.config('root.dist')}`
  };

  processHtmlOnce(config);

  return gulp.watch(config.src, event=> {
    gutil.log(event.type, event.path);
    processHtmlOnce(config);
  });
}

export default gulp.task(TASK_NAME, processHtml);