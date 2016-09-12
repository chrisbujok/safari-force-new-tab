import gulp from 'gulp';
import del from 'del';
import tap from 'gulp-tap';
import buffer from 'gulp-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
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
  gulp.src('src/**/*.js', { read: false })
    .pipe(tap(function (file) {
      file.contents = browserify(file.path, {debug: true})
        .transform('babelify')
        .bundle();
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR));

  gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(DIST_DIR));

  gulp.src('src/icons/*.png')
    .pipe(gulp.dest(DIST_DIR));
});

gulp.task('build', ['clean:dist', 'copy', 'build:dist']);
