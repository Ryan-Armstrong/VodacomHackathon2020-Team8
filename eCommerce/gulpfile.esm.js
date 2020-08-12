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

export default function () {
  watch('pages/**/*.scss', compileSass);
}