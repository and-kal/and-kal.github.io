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
  eleventyConfig.addLiquidShortcode("letterboxd", function () {
    const convert = require("xml-js");
    /* get latest items via RSS */
    const RSS_URL = `https://letterboxd.com/staxl/rss`;

    fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => {
        dataAsJson = JSON.parse(convert.xml2json(str));
        console.log(dataAsJson);
      });
    // .then((data) => `<div>${data}</div>`);
  });
  eleventyConfig.addLiquidShortcode("bookwyrm", function () {
    const convert = require("xml-js");
    /* get latest items via RSS */
    const RSS_URL = `https://bookwyrm.social/user/staxl/rss`;

    fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => {
        dataAsJson = JSON.parse(convert.xml2json(str));
        const latestActivityElements =
          dataAsJson.elements[0].elements[0].elements.reduce((memo, elem) => {
            if (elem.name === "item") {
              const html = elem.elements.reduce((a, b) => {
                if (b.name === "description") {
                  a = b.elements[0].text;
                }
                return a;
              });
              memo.push(`<p>${html}</p>`);
            }
            // get the latest 5 elements
            return memo.slice(0, 5);
          }, []);
        return latestActivityElements;
      });
  });

  return {
    passthroughFileCopy: true,
  };
};
