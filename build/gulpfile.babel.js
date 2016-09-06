import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import del from 'del';
import htmlmin from 'gulp-htmlmin';

const DIST_DIR = 'dist/force-new-tab.safariextension';

gulp.task('clean:dist', () => {
  del(`${DIST_DIR}/*.*`);
});

gulp.task('copy', () => {
  gulp.src('src/*.plist')
    .pipe(gulp.dest(DIST_DIR));
});

gulp.task('build:dist', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR));

  gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(DIST_DIR));
});

gulp.task('build', ['clean:dist', 'copy', 'build:dist']);
