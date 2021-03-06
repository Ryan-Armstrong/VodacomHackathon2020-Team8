import {src, dest, watch} from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import compiler from 'node-sass';
 
sass.compiler = compiler;
 
function compileSass() {
  return src('pages/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename((function (path) {
      // Updates the object in-place
      path.extname = ".acss";
    })))
    .pipe(dest('pages'));
};
function compileComponentSass() {
  return src('components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename((function (path) {
      // Updates the object in-place
      path.extname = ".acss";
    })))
    .pipe(dest('components'));
};

function compileTheme() {
  return src('theme/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename((function (path) {
      // Updates the object in-place
      path.extname = ".acss";
    })))
    .pipe(dest('./'));
}

export default function () {
  watch('pages/**/*.scss', compileSass);
  watch('components/**/*.scss', compileComponentSass);
  watch('theme/**/*.scss', compileTheme);
}