import _ from 'lodash';

let options = {};

export default function bindToGulp(gulp) {
  gulp.config = config;
}

export function config(path, value) {
  if (value) {
    return _.set(options, path, value);
  }
  return _.get(options, path);
}