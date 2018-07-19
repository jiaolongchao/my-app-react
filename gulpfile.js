var replace = require('gulp-replace');
var gulp = require('gulp')
var path = 'src/'
gulp.task('remtopx', function () {
    gulp.src([path + '**/*.scss'])
        .pipe(replace(/(\d*(\.\d+)?)(rem)/g, function (match, p1, p2, p3, p4, offset, string) {
            console.log(match + ' param1: ' + p1 + ' param3: ' + p3 + ' param4: ' + p4);
            return mul(p1, 100) + 'px'
        }))
        .pipe(gulp.dest(path));
});
gulp.task('pxnotranslate', function () {
    gulp.src([path + '**/*.scss', '!./src/haina/wisdom/container/style/utils.scss','!./src/haina/wisdom/container/style/default.scss'])
        .pipe(replace(/(\d)*(1px).*?(\;)(\/\*no\*\/)?/gi, function (match, p1, p2, p3, p4, offset, string) {

            if (!p4 && !p1) {
                console.log(match, p1, p4);
                return match + '/*no*/';
            } else {
                return match;
            }
            // if(p1){
            //     return match;
            // }else {
            //     return match+'/*no*/';
            // }

        }))
        .pipe(gulp.dest(path));
});
gulp.task('1pxtranslate', function () {
    gulp.src([path + '**/*.scss', '!./src/haina/wisdom/container/style/utils.scss','!./src/haina/wisdom/container/style/default.scss'])
        .pipe(replace(/(\d)*(1px).*?(\;)(\/\*no\*\/)/gi, function (match, p1, offset, string) {
            //@import '../style/utils.scss';
            //@include border-top-1px(solid,#E5E5E5);
            if (!p1) {
                console.log(match + ' param1 ' + p1);
                return match;

            } else {
                return match;
            }

        }))
        .pipe(gulp.dest(path));
});

gulp.task('fontsize', function () {
    gulp.src([path + '**/*.scss', '!./src/haina/wisdom/container/style/utils.scss','!./src/haina/wisdom/container/style/default.scss'])
        .pipe(replace(/(font-size).*?(\;)([ ])?(\/\*px\*\/)?/gi, function (match, p1, p2, p3,p4, offset, string) {
            if (!p4) {
                console.log(match, p1, p4);
                return match + "/*px*/";
            } else {
                return match;
            }

        }))
        .pipe(gulp.dest(path));
});
// gulp.task('bugchuli', function () {
//     gulp.src(['src/**/*.scss'])
//         .pipe(replace(/(\d)*\.(\d+px)/gi, function (match, p1,p2,offset, string) {
//             console.log(match + ' param ' + p2);
//             if(p1===undefined){
//                 return p2;
//             }else {
//                 return match;
//             }


//         }))
//         .pipe(gulp.dest('src/'));
// });

function mul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}