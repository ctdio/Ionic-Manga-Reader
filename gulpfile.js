var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var usemin = require('gulp-usemin');
var streamqueue = require('streamqueue');
var react = require('gulp-react');
var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('moveLibs', function(){
  var files = [
    'src/lib/jquery/jquery-2.1.4.min.js',
    'src/lib/ionic/js/ionic.bundle.min.js',
    'src/lib/ngCordova/dist/ng-cordova.min.js',
    'src/lib/ionic-material/dist/ionic.material.min.js',
    'src/lib/react/react.js',
    'src/lib/react/react-dom.min.js',
    'src/lib/ngReact/ngReact.min.js',
    'src/lib/fastclick/fastclick.min.js'
  ];
  return gulp.src(files)
    .pipe(gulp.dest('www/dist/js'));
});
gulp.task('moveFonts',function(){
  return gulp.src('src/lib/ionic/fonts/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest('www/dist/fonts'));
});
gulp.task('moveViews', function(){
  return gulp.src('src/views/*.html')
    .pipe(gulp.dest('www/views'));
});

gulp.task('usemin', function(){
  return gulp.src('./src/index.html')
    .pipe(usemin({
      css : [minifyCss()],
      js : [uglify()]
    }))
    .pipe(gulp.dest('www'));
});

gulp.task('build', ['moveLibs', 'moveViews', 'moveFonts', 'usemin']);
