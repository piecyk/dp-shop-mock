module.exports = function(config){
  config.set({

    basePath : '../',
    
    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/app.js',
      'app/js/**/*.js',
      'app/js/**/*spec.js'
    ],

    preprocessors: {
      'app/**/*tpl.html': ['ng-html2js']
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    //Chrome
    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
