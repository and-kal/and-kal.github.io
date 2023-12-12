module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add(".gitignore");

  eleventyConfig.addPassthroughCopy("./*.css");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addLiquidShortcode("header-active", function (fileslug) {
    return `
        <a ${
          fileslug === "" || fileslug === "/now" ? "class='active'" : ""
        } href="/">Now</a>
        <!-- <a ${
          fileslug === "blog" ? "class='active'" : ""
        } href="/blog">Blog</a> -->
        <a ${
          fileslug === "livecoding" ? "class='active'" : ""
        } href="/livecoding">Algorave</a>
        <a ${
          fileslug === "music" ? "class='active'" : ""
        } href="/music">Music</a>
        <a ${
          fileslug === "webdev" ? "class='active'" : ""
        } href="/webdev">Web Dev</a>
        <a ${
          fileslug === "imprint" ? "class='active'" : ""
        } id="imprint" href="/imprint">Imprint</a>
      `;
  });
  return {
    passthroughFileCopy: true,
  };
};
