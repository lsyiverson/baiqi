import gulp from 'gulp';
import gutil from 'gulp-util';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import gulpConfig from './gulpConfig';

requireDir('./tasks', {recurse: true});

gulpConfig(gulp);

gulp.config('root.src', 'src');
gulp.config('root.dist', 'dist');

gulp.task('dev', ()=> {
  runSequence(
    'clean',
    'symlink',
    'processHtml',
    'webpack'
  );
});

gulp.task('default', ()=> {
  gutil.log(gutil.colors.green('default task'));
});
