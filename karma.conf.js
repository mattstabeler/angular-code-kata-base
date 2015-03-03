module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      // 'MiAP/js/*.js',

      // 'test/unit/**/*.spec.js',
      'lib/angular/angular.min.js',
      'lib/angular/angular-mocks.js',
      'src/app/*.js',
      'spec/**/*Test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],


 // coverage reporter generates the coverage
    reporters: [
        'progress',
        'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/app/**/*.js':  ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }]
    },


    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage',
            ],
  });
};
