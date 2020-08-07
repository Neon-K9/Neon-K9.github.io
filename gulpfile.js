// gulpプラグインの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");

// webpackの設定ファイルの読み込み
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

// Sass
gulp.task("sass", function () {
  return gulp.src('./src/css/entry/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./asset/css'));
});

// js
gulp.task("bundle", function () {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("asset/js"));
});

gulp.task("build", function (done) {
  gulp.watch('./src/css/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/**/*.js', gulp.series('bundle'));
  done();
});

// ブラウザシンク
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./**", function(done) {
    browserSync.reload();
    done();
  });
});

// html, css, jsを生成
gulp.task('default', gulp.series(gulp.parallel('build', 'browserSync')));
