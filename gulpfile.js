var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default',function(){
   console.log('Gulp is installed'); 
});

gulp.task('watch',function(){
    watch('./index.html',function(){
        gulp.start('default');
    })
});