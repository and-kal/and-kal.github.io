function getRSSContent(dataAsJson, field) {
  return dataAsJson.elements[0].elements[0].elements.reduce((memo, elem) => {
    if (elem.name === "item") {
      const html = elem.elements.reduce((a, b) => {
        if (b.name === field) {
          // TODO: add date for bookwyrm fetch
          a = b.elements[0].text || b.elements[0].cdata;
        }
        return a;
      }, "");
      const cleanedHtml = html.split("staxl ")[1] || html;
      memo.push(`<div>${cleanedHtml}</div>`);
    }
    // get the latest 5 elements
    return memo.slice(0, 8);
  }, []);
}

module.exports = function (eleventyConfig) {
  require("dotenv").config();

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add(".gitignore");

  eleventyConfig.addPassthroughCopy("./*.css");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addLiquidShortcode("header-active", function (fileslug) {
    return `
        <a ${
          fileslug === "" || fileslug === "/" ? "class='active'" : ""
        } href="/">Home</a>
        <a ${fileslug === "now" ? "class='active'" : ""} href="/now">Now</a>
        <a ${
          fileslug === "blog" ? "class=''" : ""
        } href="/second-brain">Blog</a>
        <a ${
          fileslug === "livecoding" ? "class='active'" : ""
        } href="/livecoding">Livecoding</a>
        <a ${
          fileslug === "music" ? "class='active'" : ""
        } href="/music">Music</a>
        <a ${fileslug === "dev" ? "class='active'" : ""} href="/dev">Dev</a>
        <a ${
          fileslug === "imprint" ? "class='active'" : ""
        } id="imprint" href="/imprint">Imprint</a>
      `;
  });
  eleventyConfig.addLiquidShortcode("letterboxd", async function () {
    const convert = require("xml-js");
    /* get latest items via RSS */
    const RSS_URL = `https://letterboxd.com/staxl/rss`;

    const latest = await fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => {
        dataAsJson = JSON.parse(convert.xml2json(str));
        const latestActivityElements = getRSSContent(dataAsJson, "description")
          .filter((div) => {
            // only show elements with an image
            return /<img src/gi.test(div);
          })
          .map((div) => {
            return `<code>${div}</code>`;
          });
        return latestActivityElements;
      });
    return latest;
  });
  eleventyConfig.addLiquidShortcode("bookwyrm", async function () {
    const convert = require("xml-js");
    /* get latest items via RSS */
    const RSS_URL = `https://bookwyrm.social/user/staxl/rss`;

    const latest = await fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => {
        dataAsJson = JSON.parse(convert.xml2json(str));
        const latestActivityElements = getRSSContent(dataAsJson, "title").map(
          (div) => {
            return `<code>${div}</code>`;
          }
        );
        return latestActivityElements;
      });
    return latest;
  });
  eleventyConfig.addLiquidShortcode("lastfm", async function () {
    /* get weekly top artists */
    const RSS_URL_1 = `http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=supermandre&api_key=${process.env.API_KEY}&format=json`;
    const RSS_URL_2 = `http://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=supermandre&api_key=${process.env.API_KEY}&format=json`;

    const weeklyTopArtists = await fetch(RSS_URL_1)
      .then((res) => res.json())
      .then((json) => {
        const artists = json.weeklyartistchart.artist;
        return artists.map((artist, idx) => {
          if (idx < 8) {
            const htmlElement = "<div>" + artist.name + "</div>";
            return htmlElement;
          }
        });
      });
    const lovedTracks = await fetch(RSS_URL_2)
      .then((res) => res.json())
      .then((json) => {
        const artists = json.lovedtracks.track;
        return artists.map((track, idx) => {
          if (track && idx < 8) {
            const htmlElement =
              "<code>" +
              track.artist?.name +
              ": " +
              track.name +
              // `<img src='${track.image[0]["#text"]}'>` +
              "</code>";
            return htmlElement;
          }
        });
      });

    // return [...weeklyTopArtists, ...lovedTracks];
    return [...lovedTracks];
  });

  return {
    passthroughFileCopy: true,
  };
};
