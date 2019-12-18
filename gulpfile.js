var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean-css'),
  include = require('gulp-file-include'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  saveLicense = require('uglify-save-license'),
  sourceMaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  config = {
    bower: 'bower_components'
  }

sass.compiler = require('node-sass')

function html() {

  return gulp.src('./src/pages/*.html')
    .pipe(include())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())

}

function styles() {

  return gulp.src([
    './src/scss/*.scss'
  ])
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(connect.reload())

}

function scripts() {

  return gulp.src([
    './src/js/*.js',
    './src/js/*/*.js'
  ])
    .pipe(sourceMaps.init())
    .pipe(concat('scripts.js'))
    .pipe(uglify({
      output: {
        comments: saveLicense
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(connect.reload())

}

function css(done) {

  gulp.src([
    config.bower + '/bootstrap/dist/css/bootstrap.min.css',
    config.bower + '/bootstrap/dist/css/bootstrap.min.css.map',
    config.bower + '/animate.css/animate.min.css'
  ])
    .pipe(gulp.dest('./dist/assets/css'))

  gulp.src(config.bower + '/fontawesome/css/all.min.css')
    .pipe(rename({
      basename: 'fontawesome',
      suffix: '.min',
    }))
    .pipe(gulp.dest('./dist/assets/css'))

  done()

}

function libs_fonts() {
  return gulp.src([
    config.bower + '/fontawesome/webfonts/*.**'
  ])
    .pipe(gulp.dest('./dist/assets/webfonts'))
}

function js() {

  return gulp.src([
    config.bower + '/jquery/dist/jquery.min.js',
    config.bower + '/jquery/dist/jquery.min.map',
    config.bower + '/bootstrap/dist/js/bootstrap.bundle.min.js',
    config.bower + '/bootstrap/dist/js/bootstrap.bundle.min.js.map',
  ])
    .pipe(gulp.dest('./dist/assets/js'))

}

function images() {

  return gulp.src([
    './src/images/*.**',
    './src/images/*/*.**'
  ])
    .pipe(gulp.dest('./dist/assets/images'))
    .pipe(connect.reload())

}

function watch(done) {

  gulp.watch([
    './src/pages/*.html',
    './src/inc/*.html'
  ], html)

  gulp.watch([
    './src/scss/*.scss',
    './src/scss/*/*.scss',
    './src/scss/*/*/*.scss'
  ], styles)

  gulp.watch('./src/js/*.js', scripts)

  gulp.watch([
    './src/images/*.**',
    './src/images/*/*.**'
  ], images)

  done()

}

function server(done) {

  connect.server({
    root: './dist',
    host: [
      'localhost',
      '192.168.93.25'
    ],
    livereload: true,
  })

  done()

}

gulp.task('import', gulp.series(css, js, images, libs_fonts))
gulp.task('default', gulp.series(server, css, js, watch, html, styles, scripts, images, libs_fonts))
gulp.task('build', gulp.series(server, watch, html, styles, scripts, images))