module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./*.css');
    eleventyConfig.addPassthroughCopy('./assets');
    eleventyConfig.addLiquidShortcode("header-active", function(fileslug) { 
      return `
        <a ${fileslug==="" ? "class='active'" : ""} href="/">Home</a>
        <!-- <a ${fileslug==="blog" ? "class='active'" : ""} href="/blog">Blog</a> -->
        <a ${fileslug==="livecoding" ? "class='active'" : ""} href="/livecoding">Livecoding</a>
        <a ${fileslug==="music" ? "class='active'" : ""} href="/music">Music</a>
        <a ${fileslug==="webdev" ? "class='active'" : ""} href="/webdev">Web Dev</a>
        <a ${fileslug==="imprint" ? "class='active'" : ""} id="imprint" href="/imprint">Imprint</a>
      `; 
    });
    return {
      passthroughFileCopy: true
    };
  };