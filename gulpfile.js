var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var express = require('express');
var cors = require('cors');
var path = require('path');
var exec = require('child_process').exec;
var portfinder = require('portfinder');
var swaggerRepo = require('swagger-repo');
var colors = require('colors/safe');

var DIST_DIR = 'web_deploy';

function serve(cb) {
  portfinder.getPort({port: 3000}, function (err, port) {
    gulpConnect.server({
      root: [DIST_DIR],
      livereload: true,
      port: port,
      middleware: function (gulpConnect, opt) {
        return [
          cors()
        ]
      }
    });
  });
  cb();
}

function edit(cb) {
  app = express();
  app.listen(5000, () => colors.green('swagger-editor started http://localhost:5000'));
  app.use(swaggerRepo.swaggerEditorMiddleware());
  cb();
}

function build(cb) {
  exec('npm run build', function (err, stdout, stderr) {
    console.log(stderr);
    cb(err);
  });
}

function reload(cb) {
  gulp.src(DIST_DIR).pipe(gulpConnect.reload());
  cb();
}

function watch(cb) {
  gulp.watch(['spec/**/*', 'web/**/*'], gulp.series(build, reload));
  cb();
}

exports.default = gulp.series(build, watch, edit, serve);
exports.serve = serve;
