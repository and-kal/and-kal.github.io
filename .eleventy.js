module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./*.css');
    eleventyConfig.addPassthroughCopy('./assets');
    eleventyConfig.addLiquidShortcode("header-active", function(fileslug) { 
      return `
        <a ${fileslug==="" ? "class='active'" : ""} href="/">Home</a>
        <a ${fileslug==="livecoding" ? "class='active'" : ""} href="/livecoding">Livecoding</a>
        <a ${fileslug==="dj" ? "class='active'" : ""} href="/dj">DJing</a>
        <a ${fileslug==="bands" ? "class='active'" : ""} href="/music">music</a>
        <a ${fileslug==="imprint" ? "class='active'" : ""} href="/imprint">Imprint</a>
        <a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a>
      `; 
    });
    return {
      passthroughFileCopy: true
    };
  };