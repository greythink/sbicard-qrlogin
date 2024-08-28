const assetBasePath = 'creditcards/resources'



module.exports = function (config) {
    // Global data
    config.addGlobalData('assetBasePath', '/' + assetBasePath);

    // Set output paths
    config.addPassthroughCopy({ 'src/assets/global': '.' });
    config.addPassthroughCopy({ 'src/assets/favicon': assetBasePath + '/img' });
    config.addPassthroughCopy({ 'src/assets/logo': assetBasePath + '/img' });
    config.addPassthroughCopy({ 'src/assets/icons': assetBasePath + '/img' });
    config.addPassthroughCopy({ 'src/assets/css': assetBasePath + '/css' });
    config.addPassthroughCopy({ 'src/assets/min-css': assetBasePath + '/min-css' });
    config.addPassthroughCopy({ 'src/assets/js': assetBasePath + '/js' });
    config.addPassthroughCopy({ 'src/assets/min-js': assetBasePath + '/min-js' });
    config.addPassthroughCopy({ 'src/assets/concat-js': assetBasePath + '/concat-js' });

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
