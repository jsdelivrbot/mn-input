import browserSync from 'browser-sync';

module.exports = {
  templates: {
    src: './sources/templates/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
  },
  scripts: {
    src: [
      './sources/scripts/mn-input.class.js',
    ],
    dest: './dist/',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './public',
        './dist',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
};
