var f      = require('util').format;
var semver = require('semver');
module.exports = function(grunt) {
  'use strict';

  // Load Grunt tasks declared in the package.json file
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg:    grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Constants
    version:    '<%= pkg.version %>',
    name:       '<%= pkg.name %>',
    buildDir:   'dist',
    sourceDir:  'src',
    testDir:    'test',

    // Task configuration.
    clean: {
      files: ['<%= buildDir %>']
    },
    concat: {
      options: {
        banner:       '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src:  ['<%= sourceDir %>/<%= name %>.js'],
        dest: '<%= buildDir %>/jquery.<%= name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src:  '<%= concat.dist.dest %>',
        dest: '<%= buildDir %>/jquery.<%= name %>.min.js'
      }
    },
    qunit: {
      files: ['<%= testDir %>/**/*.html']
    },
    sed: {
      version: {
        pattern:      '%VERSION%',
        replacement:  '<%= version %>',
        path:         ['<%= uglify.dist.dest %>', '<%= concat.dist.dest %>']
      }
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc',
          reporterOutput: ''
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: '<%= sourceDir %>/.jshintrc',
          reporterOutput: ''
        },
        src: ['<%= sourceDir %>/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc',
          reporterOutput: ''
        },
        src: ['<%= testDir %>/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files:  '<%= jshint.gruntfile.src %>',
        tasks:  ['jshint:gruntfile']
      },
      src: {
        files:  '<%= jshint.src.src %>',
        tasks:  ['jshint:src', 'qunit']
      },
      test: {
        files:  '<%= jshint.test.src %>',
        tasks:  ['jshint:test', 'qunit']
      }
    },
    exec: {
      open_qunit_browser: {
        cmd: 'open <%= testDir %>/scrollNav.html'
      },
      git_is_clean: {
        cmd: 'test -z "$(git status --porcelain)"'
      },
      git_on_master: {
        cmd: 'test $(git symbolic-ref --short -q HEAD) = master'
      },
      git_add: {
        cmd: 'git add .'
      },
      git_commit: {
        cmd: function(m) { return f('git commit -m "%s"', m); }
      },
      git_tag: {
        cmd: function(v) { return f('git tag v%s -am "%s"', v, v); }
      },
      git_push: {
        cmd: 'git push && git push --tags'
      },
      readme: {
        cmd: 'sed -E -i "" \'s/v[0-9]+\\.[0-9]+\\.[0-9]+/v<%= version %>/\' README.md',
      },
      publish_assets: {
        cmd: [
          'cp -r <%= buildDir %> <%= name %>.js',
          'zip -r <%= name %>.js/<%= name %>.js.zip <%= name %>.js',
          'git checkout gh-pages',
          'rm -rf releases/latest',
          'cp -r <%= name %>.js releases/<%= version %>',
          'cp -r <%= name %>.js releases/latest',
          'git add releases/<%= version %> releases/latest',
          'sed -E -i "" \'s/v[0-9]+\\.[0-9]+\\.[0-9]+/v<%= version %>/\' index.html',
          'git add index.html',
          'git commit -m "Add assets for <%= version %>."',
          'git push',
          'git checkout -',
          'rm -rf <%= name %>.js'
        ].join(' && ')
      }
    }
  });

grunt.registerTask('release', 'Ship it.', function(version) {
    var curVersion = grunt.config.get('version');

    version = semver.inc(curVersion, version) || version;

    if (!semver.valid(version) || semver.lte(version, curVersion)) {
      grunt.fatal('invalid version dummy');
    }

    grunt.config.set('version', version);

    grunt.task.run([
      'exec:git_on_master',
      'exec:git_is_clean',
      'lint',
      'test',
      'manifests:' + version,
      'exec:readme',
      'build',
      'exec:git_add',
      'exec:git_commit:' + version,
      'exec:git_tag:' + version,
      'exec:git_push',
      'exec:publish_assets'
    ]);
  });

  grunt.registerTask('manifests', 'Update manifests.', function(version) {
    var _             = grunt.util._;
    var pkg           = grunt.file.readJSON('package.json');
    var bower         = grunt.file.readJSON('bower.json');
    var jqueryPlugin  = grunt.file.readJSON('scrollNav.jquery.json');

    bower = JSON.stringify(_.extend(bower, {
      name:     pkg.name,
      version:  version,
      author:   pkg.author,
      keywords: pkg.keywords
    }), null, 2);

    jqueryPlugin = JSON.stringify(_.extend(jqueryPlugin, {
      name:         pkg.name,
      title:        pkg.name,
      version:      version,
      author:       pkg.author,
      description:  pkg.description,
      keywords:     pkg.keywords,
      homepage:     pkg.homepage,
      bugs:         pkg.bugs,
      maintainers:  pkg.contributors
    }), null, 2);

    pkg = JSON.stringify(_.extend(pkg, {
      version: version
    }), null, 2);

    grunt.file.write('package.json', pkg);
    grunt.file.write('bower.json', bower);
    grunt.file.write('scrollNav.jquery.json', jqueryPlugin);
  });

  // Load Tasks.
  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('test:browser', ['exec:open_qunit_browser']);

};
