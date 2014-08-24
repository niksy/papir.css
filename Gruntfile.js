module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= pkg.description %> | Author: <%= pkg.author %>, <%= grunt.template.today("yyyy") %> | License: <%= pkg.license %> */'
		},

		concat: {
			dist: {
				options: {
					stripBanners: true,
					banner: '<%= meta.banner %>\n'
				},
				files: {
					'dist/papir.css': ['src/out/papir.css']
				}
			}
		},

		cssmin: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/papir.min.css': ['src/out/papir.css']
				}
			}
		},

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: false
			}
		},

		csslint: {
			main: {
				options: {
					csslintrc: '.csslintrc'
				},
				src: [
					'src/**/*.css'
				]
			}
		},

		autoprefixer: {
			dist: {
				options: {
					browsers: ['last 2 versions', 'Firefox >= 20', 'iOS >= 5', 'Android >= 2', 'Explorer 8']
				},
				src: 'src/papir.css',
				dest: 'src/out/papir.css'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('stylecheck', ['csslint:main']);
	grunt.registerTask('default', ['autoprefixer','concat','cssmin']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
