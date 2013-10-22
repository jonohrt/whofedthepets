module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          src: ['**/*.jade'],
          dest: 'app',
          cwd: 'app',
          ext: '.xml'
        }]
      }
    },
    ltss: {
      compile: {
        files: [{
          expand: true,
          src: ['**/*.ltss'],
          dest: 'app',
          cwd: 'app',
          ext: '.tss'
        }]
      }
    },
    coffee:{
      compile: { 
         options: {
            bare: true
          },
        files: [{
          expand: true,
          cwd: "./app",
          src: ["**/*.coffee"],
          dest: "./app",
          ext: ".js",
         
          } ,{
          expand: true,
          cwd: "./spec/coffee",
          src: ["**/*.coffee"],
          dest: "./spec",
          ext: ".js",
         
          }      
        ]
      }
    },
    tishadow: {
      options: {
        port: 3000,
        update: false,
        withAlloy: true,
        alloy: {
          platform: ["ios"],
          noBanner: true,
          logLevel: 1
        }
      },
      run_android: {
        command: 'run',
        alloy: {
          platform: ['android']
        }
      },
      run_ios:{
        command: 'run',
        alloy: {
          platform: ['ios']
        }
      },
      test: {
        command: 'spec',
        options: {
          junit: false,
          update: false
        } 
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      jade: {
        files:'spec/**/*.jade',
        tasks: ['jade','tishadow:run_ios']
      },
      ltss: {
        files: 'app/**/*.ltss',
        tasks: ['ltss','tishadow:run_ios']
      },
      tishadow: {
        files: ['app/**/*.js', 'app/**/*.xml', 'app/**/*.tss'],
        tasks: ['tishadow:run_ios']
      },
      // tishadow: {
      //    files: ['spec/**/*.js'],
      //   tasks: ['tishadow:test']
      // }, 
     
      coffeeApp:{
        files: ['app/**/*.coffee'], 
        tasks: ['coffee','tishadow:run_ios'],
        
      },
      coffee:{
        files: ['spec/**/*.coffee'], 
        tasks: ['coffee','tishadow:test'],
        
      }
    
    }

  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-ltss');
  grunt.loadNpmTasks('grunt-tishadow');
  grunt.loadNpmTasks('grunt-exec');
   
  grunt.registerTask('default', ['jade','ltss','coffee', 'tishadow:test']);
   
  //only modify changed file
  grunt.event.on('watch', function(action, filepath) {
    var o = {};
    if (filepath.match(/.jade$/)) {
      o[filepath.replace(".jade",".xml")] = [filepath];
      grunt.config.set(['jade', 'compile', 'files'],o);
    } else if (filepath.match(/.ltss$/)){
      o[filepath.replace(".ltss",".tss")] = [filepath];
      grunt.config.set(['ltss', 'compile', 'files'],o);
    }
  });
   
};
