module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/image");

    eleventyConfig.addShortcode('image', function(src, alt, width, height) {
        return `<img src="${src}" alt="${alt}" width="${width}" height="${height}">`;
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
