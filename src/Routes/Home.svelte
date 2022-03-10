<script>
  import { blur } from "svelte/transition";
  import { onMount } from "svelte";

onMount(() => {
  window.scrollTo(0, 0);
});
</script>

<div transition:blur>
  <h1>Hello, I'm André ^~^</h1>
  <h2>And here's some things that I do:</h2>

  <div id="intro">
    <div>
        <span>◝⊡_⊡◜ </span>I'm aspiring full-stack web developer based in Leipzig.</div>
    <div>
      <span>❐‿❑ </span>Other than that, I'm interested in A/V livecoding and host livecoding
      workshops and events.
    </div>
    <div>
      <span>♪♪)>ш=(^。^ ) </span>Sometimes I DJ or try to produce music and perform at times.
    </div>
    <div>
      <span>♫꒰・◡・๑꒱ </span>I also set up DIY shows and am active in the local scene.
    </div>
  </div>
  <div>
    <p>
      Get in touch with me if you got any offers or ideas for projects,
      collaborations and whatnot. You can reach out to me by sending me an
      email:
    </p>
    <div id="mailcode">
      <code>
        <em>let</em><br />
        x = andre<br />
        y = grrlz<br />
        z = net<br />
        <em>in </em>x @ y . z<span id="cursor" /><br />
      </code>
    </div>
  </div>
  <div>
    Or by getting in touch with me through any of these social media platforms:
  </div>
  <!-- icons by Alpár - Etele Méder https://iconscout.com/contributors/pocike/icons
and Unicons Font https://iconscout.com/contributors/unicons/icons 
and Vicons Design -->
  <div id="socialmedia">
    <a href="https://www.facebook.com/li.almereyda/"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/facebook-116314.svg"
        alt="facebook logo"
        height="40px"
      /></a
    >
    <a href="https://www.instagram.com/staxl_andre/"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/instagram-116326.svg"
        alt="instagram logo"
        height="40px"
      /></a
    >
    <a href="https://github.com/and-kal/"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/github-116317.svg"
        alt="github logo"
        height="40px"
      /></a
    >
    <a href="https://soundcloud.com/staxl"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/sound-116343.svg"
        alt="soundcloud logo"
        height="40px"
      /></a
    >
    <a href="https://www.mixcloud.com/optimooptimo/"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/mixcloud-116331.svg"
        alt="mixcloud logo"
        height="40px"
      /></a
    >
    <a href="https://www.reddit.com/user/kallnasty"
      ><img
        src="./icons/social-media-by-AlparEteleMeder/reddit-116338.svg"
        alt="reddit logo"
        height="40px"
      /></a
    >
    <a href="https://www.last.fm/user/supermandre"
      ><img
        src="./icons/by-Typicons/social.svg"
        alt="last.fm logo"
        height="40px"
      /></a
    >
  </div>
</div>

<style>

    #intro span {
        color:rgb(5, 37, 37);
        margin: 0 0.3rem 0 0;
    }

  #mailcode {
    width: 40%;
    height: auto;
    padding: 0.5em;
    border: 2px solid teal;
    background-color: black;
  }

  #mailcode code {
    color: rgb(23, 223, 223);
    font-family: "Cordata400", monospace;
    font-size: 1.25rem;
  }

  code em {
    color: rgb(159, 59, 230);
  }

  #cursor {
    animation: cursorblink 0.75s steps(2, end) infinite;
    height: 1rem;
    border: 0px solid varteal;
  }

  @keyframes cursorblink {
    to {
      border: 1px solid varteal;
    }
  }

  #socialmedia {
    margin: 1rem 0;
  }

  #socialmedia a {
    font-size: 45px;
    padding: 0.5rem;
  }
</style>
