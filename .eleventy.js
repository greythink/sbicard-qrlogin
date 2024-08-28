module.exports = function (config) {
    // Set output paths
    config.addPassthroughCopy('src/assets/fonts');
    config.addPassthroughCopy('src/assets/icons');
    config.addPassthroughCopy('src/assets/logo');
    config.addPassthroughCopy({ 'src/assets/favicon': '.' });
    config.addPassthroughCopy('src/assets/media');
    config.addPassthroughCopy('src/assets/css/legacy.css');
    config.addPassthroughCopy('src/assets/js');

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
