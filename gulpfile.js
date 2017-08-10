const gulp = require('gulp');
const bumper = require('gulp-bump');
const eslint = require('gulp-eslint');
const git = require('gulp-git');
const shell = require('gulp-shell');
const fs = require('fs');
const sequence = require('gulp-sequence');
const path = require('path');
const nsp = require('gulp-nsp');

gulp.task('eslint', () => gulp.src(['gulpfile.js', 'generators/app/index.js', 'test/*.js'])
    // .pipe(plumber({errorHandler: handleErrors}))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
);

gulp.task('nsp', (cb) => {
    nsp({ package: path.resolve('package.json') }, cb);
});

gulp.task('bump-patch', bump('patch'));
gulp.task('bump-minor', bump('minor'));
gulp.task('bump-major', bump('major'));

gulp.task('git-commit', () => {
    const v = `update to version ${version()}`;
    gulp.src(['./generators/**/*', './README.md', './package.json', './gulpfile.js', './.travis.yml', './travis/**/*'])
        .pipe(git.add())
        .pipe(git.commit(v));
});

gulp.task('git-push', (cb) => {
    const v = version();
    git.push('origin', 'master', (err) => {
        if (err) return cb(err);
        git.tag(v, v, (err) => {
            if (err) return cb(err);
            git.push('origin', 'master', {
                args: '--tags'
            }, cb);
            return true;
        });
        return true;
    });
});

gulp.task('npm', shell.task([
    'npm publish'
]));

function bump(level) {
    return function () {
        return gulp.src(['./package.json'])
            .pipe(bumper({
                type: level
            }))
            .pipe(gulp.dest('./'));
    };
}

function version() {
    return JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
}

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static']);
gulp.task('deploy-patch', sequence('bump-patch', 'git-commit', 'git-push', 'npm'));
gulp.task('deploy-minor', sequence('bump-minor', 'git-commit', 'git-push', 'npm'));
gulp.task('deploy-major', sequence('bump-major', 'git-commit', 'git-push', 'npm'));
