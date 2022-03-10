<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { onMount } from "svelte";

  import Home from "./Routes/Home.svelte";
  import Livecoding from "./Routes/Livecoding.svelte";
  import Dj from "./Routes/Dj.svelte";
  import Tapes from "./Routes/Tapes.svelte";
  import Bands from "./Routes/Bands.svelte";
  import Itr from "./Routes/Itr.svelte";
  import Imprint from "./Routes/Imprint.svelte";

  /* p5.js animation" */

  import p5 from "./p5.min";

  onMount(function () {
    window.scrollTo(0, 0);
    let myp5 = new p5(sketch, 0);
  });

  const sketch = (p5) => {
    p5.setup = () => {
      let canvas = p5.createCanvas(p5.windowWidth - 50, p5.windowHeight);
      canvas.style("position", "absolute");
      canvas.style("top", "0");
      canvas.style("left", "0");
      canvas.style("z-index", "-1");
      p5.frameRate(12);
    };

    let pointX;
    let pointY;
    let morph = 0;
    let pointCol;

    p5.draw = () => {
      morph = p5.random(0, 1);
      pointCol = p5.lerpColor(
        p5.color(243, 100, 40),
        p5.color(39, 224, 57),
        morph
      );
      pointX = p5.random(0, p5.displayWidth);
      pointY = p5.random(0, p5.displayHeight);
      p5.fill(pointCol);
      p5.noStroke();
      p5.ellipse(pointX, pointY, 10, 10);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(p5.width, p5.height);
    };
  };
</script>

<Router>
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="livecoding">Livecoding</Link>
      <Link to="dj">DJing</Link>
      <Link to="tapes">Tapes</Link>
      <Link to="bands">Bands</Link>
      <Link to="itr">Shows</Link>
      <Link to="imprint">Imprint</Link>
    </nav>
  </header>

  <main {sketch}>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/livecoding">
      <Livecoding />
    </Route>
    <Route path="/dj">
      <Dj />
    </Route>
    <Route path="/tapes">
      <Tapes />
    </Route>
    <Route path="/bands">
      <Bands />
    </Route>
    <Route path="/itr">
      <Itr />
    </Route>
    <Route path="/imprint">
      <Imprint />
    </Route>
  </main>
</Router>

<style>
  main {
    padding: 1.25rem;
    background-color: teal;
    border: 1px solid black;
  }

  header {
    position: sticky;
    top: 0;
  }

  header nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: auto;
    max-width: 768px;
    width: 100%;
    font-weight: 600;
    font-size: 1.5rem;
  }

  header nav > :global(a) {
    background-color: blue;
  }
</style>
