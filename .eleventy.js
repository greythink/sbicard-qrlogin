const assetResourcesPath = 'creditcards/resources'



module.exports = function (config) {
    // Global data
    config.addGlobalData('assetResourcesPath', assetResourcesPath);

    // Set output paths
    config.addPassthroughCopy({ 'src/assets/global': '.' });
    config.addPassthroughCopy({ 'src/assets/favicon': assetResourcesPath + '/img' });
    config.addPassthroughCopy({ 'src/assets/logo': assetResourcesPath + '/img' });
    config.addPassthroughCopy({ 'src/assets/icons': assetResourcesPath + '/img' });
    config.addPassthroughCopy({ 'src/assets/media': assetResourcesPath + '/img' });
    config.addPassthroughCopy({ 'src/assets/css/ie.css': assetResourcesPath + '/css/ie.css' });
    config.addPassthroughCopy({ 'src/assets/min-css': assetResourcesPath + '/min-css' });
    config.addPassthroughCopy({ 'src/assets/unminified-css': assetResourcesPath + '/unminified-css' });
    config.addPassthroughCopy({ 'src/assets/js': assetResourcesPath + '/js' });
    config.addPassthroughCopy({ 'src/assets/min-js': assetResourcesPath + '/min-js' });
    config.addPassthroughCopy({ 'src/assets/unminified-js': assetResourcesPath + '/unminified-js' });
    config.addPassthroughCopy({ 'src/assets/concat-js': assetResourcesPath + '/concat-js' });
    config.addPassthroughCopy('src/robots.txt');

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
