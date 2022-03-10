<script>
  import { blur } from "svelte/transition";
  import { onMount } from "svelte";

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  onMount(() => {
    scrollUp();
  });

  let content2021 = false;
  let content2020 = false;
  let content2019 = false;
  let content2018 = false;
  let content2017 = false;
  let content2016 = false;
  let content2015 = false;
  let content2014 = false;
</script>

<div transition:blur>
  <h1>Income Tax Refund</h1>
  <p>
    For a few years now I'm running a small, non-commercial collective for DIY
    concerts in Leipzig and around. We set up shows for bands and artists we
    like and try to create a network of music-lovers, musicians, designers and
    off-spaces. If you're interested or want to join our newsletter, you can get
    in touch with us through
    <a href="https://www.facebook.com/refundtaxincome">social media</a> or write
    to me directly.
  </p>

  <p>
    Here's our <em>gig archive</em> with nearly all shows we've set up up until now.
    For obvious reasons there was not a lot happening in 2020 and 2021. But we're
    continuing.
  </p>
  <div id="gigarchive">
    <div class="year-container">
      <button on:click={() => (content2021 = !content2021)}>2021</button>
      {#if content2021}
        <div class="concertbox" transition:blur>
          <ul>
            <li>AUG25</li>
            <li>Talibam!</li>
          </ul>

          <ul>
            <li>JUL5</li>
            <li>Somaticae | Kacktuss | Eyal Talmor</li>
          </ul>

          <ul>
            <li>NOV6</li>
            <li>Clear History | Snitch Pitch | Cesar Palace | Staxl</li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2020 = !content2020)}>2020</button>
      {#if content2020}
        <div class="concertbox" transition:blur>
          <ul>
            <li>MAR11</li>
            <li>Emma Grace | Kacktuss</li>
          </ul>

          <ul>
            <li>JAN24</li>
            <li>Oba Boba & die Abgründe | Doc Flippers</li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2019 = !content2019)}>2019</button>
      {#if content2019}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC02</li>
            <li>Nina Harker | Carton | Teubé</li>
          </ul>

          <ul>
            <li>NOV27</li>
            <li>Sajjra | chance to tliwosc</li>
          </ul>

          <ul>
            <li>NOV11</li>
            <li>Tropical Trash | State Champion | Ned Colette | Rastrejo</li>
          </ul>

          <ul>
            <li>OCT23</li>
            <li>Slumb Party | Moron</li>
          </ul>

          <ul>
            <li>OCT21</li>
            <li>Pauwels | Cesar Palace | jeffk</li>
          </ul>

          <ul>
            <li>OCT20</li>
            <li>Lassie | Dog Dimension | Purpur Spytt</li>
          </ul>

          <ul>
            <li>SEP13</li>
            <li>Ryskinder | Ricarda Cometa</li>
          </ul>

          <ul>
            <li>SEP11</li>
            <li>Landowner | One Room Hotel | Planets are on it</li>
          </ul>

          <ul>
            <li>SEP01</li>
            <li>Cuntroaches | B'schissn | Staxl Oll</li>
          </ul>

          <ul>
            <li>AUG08</li>
            <li>Neon Lies | The Rainbows | Invisible Popcorn</li>
          </ul>

          <ul>
            <li>JUL18</li>
            <li>Juicebumps | Empty Bones | Lassie VS Doc Flippers | Eazy</li>
          </ul>

          <ul>
            <li>JUN23</li>
            <li>Warm Swords | Erasers | Carbon Hysteria</li>
          </ul>

          <ul>
            <li>JUN10</li>
            <li>Marbled Eye | Tanning Bats | Geyer Inferno & King Kolba</li>
          </ul>

          <ul>
            <li>MAY31</li>
            <li>Cagette & Jealous & Avishag Cohen Rodrigues</li>
          </ul>

          <ul>
            <li>MAY26</li>
            <li>Zad Kokar & Les Combi Beyaz | YOR</li>
          </ul>

          <ul>
            <li>MAY24</li>
            <li>Bunte Truppe (Adam/Fuchs/Oliveras/Schick) | Deliluh | OKGB</li>
          </ul>

          <ul>
            <li>MAY22</li>
            <li>Attic Ted | De Klumb | Püppi Galore</li>
          </ul>

          <ul>
            <li>MAY14</li>
            <li>Vaguess | Lassie | Warm Swords</li>
          </ul>

          <ul>
            <li>MAY8</li>
            <li>Guttersnipe | Gud Er Kvinde</li>
          </ul>

          <ul>
            <li>APR28</li>
            <li>AG Form | mOck</li>
          </ul>

          <ul>
            <li>APR22</li>
            <li>The Staches + Knickers</li>
          </ul>

          <ul>
            <li>MAR30</li>
            <li>Nichtseattle</li>
          </ul>

          <ul>
            <li>MAR14</li>
            <li>Lassie | Knickers | #BBF</li>
          </ul>

          <ul>
            <li>JAN29</li>
            <li>
              Sufre | Hallelujah Mother Helpers // Leipzig Show, Connewitz
            </li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2018 = !content2018)}>2018</button>
      {#if content2018}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC27</li>
            <li>Abrichten | chance to tliwosc</li>
          </ul>

          <!-- DEC22 DOC Flippppers -->

          <ul>
            <li>DEC8</li>
            <li>Shitchain (Shiplovers | Buzkashi Reinhardt) & Abrichten</li>
          </ul>

          <ul>
            <li>OCT18</li>
            <li>Moon Relay + Bell Lungs</li>
          </ul>

          <ul>
            <li>SEP30</li>
            <li>Wolfgang Seidel liest »Wir müssen hier raus!« | Staxl Oll</li>
          </ul>

          <!-- SEP15
Sir Robin & The Longbowmen | Doc Flippers  -->

          <ul>
            <li>AUG28</li>
            <li>Suicidal Furniture | Traashboo/ ____u̵n̷ | MMaya</li>
          </ul>

          <ul>
            <li>AUG07</li>
            <li>Les Halles | Magnetophonique | Datashock</li>
          </ul>

          <ul>
            <li>JUL25</li>
            <li>ROCK | Laxity</li>
          </ul>

          <ul>
            <li>JUL6</li>
            <li>Flying Moon in Space | Lassie</li>
          </ul>

          <ul>
            <li>JUL5</li>
            <li>Partout Partout | Sébastien Branche</li>
          </ul>

          <ul>
            <li>JUL3</li>
            <li>Orchestre Tout Puissant Marcel Duchamp XXL | Staxl Oll</li>
          </ul>

          <ul>
            <li>JUN21</li>
            <li>Golden Oriole | Brutal Blues</li>
          </ul>

          <ul>
            <li>JUN10</li>
            <li>Maraudeur | Purpur Spytt | Thee Agnes Muller | Macrophagos</li>
          </ul>

          <ul>
            <li>AUG07</li>
            <li>Les Halles | Magnetophonique | Datashock</li>
          </ul>

          <ul>
            <li>MAY28</li>
            <li>Dolphins | Freak Heat Waves | New Fries</li>
          </ul>

          <ul>
            <li>MAY8</li>
            <li>Lemones | Weird/Dust | Ernesto González b2b Judith Crasser</li>
          </ul>

          <ul>
            <li>MAY6</li>
            <li>Marbled Eye | The Staches | Moron</li>
          </ul>

          <ul>
            <li>MAY3</li>
            <li>Claws Of Saurtopia NoiseFestWarmUp #4</li>
            <li>ENOB | (...) | randomismyname</li>
          </ul>

          <ul>
            <li>APR28</li>
            <li>Barłóg | Biggest Rat | 2035</li>
          </ul>

          <ul>
            <li>APR12</li>
            <li>Claws Of Saurtopia NoiseFestWarmUp #3</li>
            <li>Kurws | Horacio Pollard | Nystagmus</li>
          </ul>

          <ul>
            <li>MAR21</li>
            <li>Schrein | Staxl Oll</li>
          </ul>

          <ul>
            <li>MAR15</li>
            <li>Dno</li>
          </ul>

          <ul>
            <li>FEB17</li>
            <li>DUDS | Maraudeur | Rouge Gorge</li>
          </ul>

          <ul>
            <li>JAN21</li>
            <li>
              Oba Boba & die Abgründe | Staxl Oll | Planets Are On It | The
              Woman Inside
            </li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2017 = !content2017)}>2017</button>
      {#if content2017}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC15</li>
            <li>Tropical Trash | Octopoulpe | Brutal Birthday</li>
          </ul>

          <ul>
            <li>NOV24</li>
            <li>Exit Order | Total Heels</li>
          </ul>

          <ul>
            <li>NOV18</li>
            <li>Tick | Neon Lies | Bionihil</li>
          </ul>

          <ul>
            <li>OCT13</li>
            <li>
              The Pussywarmers & Réka | Dolphin Flight | Animal Sweatshirt
            </li>
          </ul>

          <ul>
            <li>OCT5</li>
            <li>Noir Reva | Radium Palazzo</li>
          </ul>

          <ul>
            <li>SEP23</li>
            <li>Mosquito Ego | WIDT | Buzkashi Reinhart | Ghani's Boys</li>
          </ul>

          <ul>
            <li>SEP15</li>
            <li>Golden Oriole | BRIE | FOOD | Kaktus</li>
          </ul>

          <ul>
            <li>MAY29</li>
            <li>
              Hildegard von Binge Drinking | Deux Boules Vanille | Partout
              Partout
            </li>
          </ul>

          <ul>
            <li>APR22</li>
            <li>Qujaku | The Contact High | Ryskinder | Mother Sunday</li>
          </ul>

          <ul>
            <li>MAR30</li>
            <li>The Staches | Purpur Spytt | YOR | DJ GeneTurtletaub</li>
          </ul>

          <ul>
            <li>MAR12</li>
            <li>Blanka | Pascale Project</li>
          </ul>

          <ul>
            <li>MAR4</li>
            <li>Cannonball Statman</li>
          </ul>

          <ul>
            <li>FEB27</li>
            <li>Plattenbau | Lobster Lobster | Til Schweiger Must Die</li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2016 = !content2016)}>2016</button>
      {#if content2016}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC10</li>
            <li>
              Fuego | Corecass | Randomismyname | Der Züchter der
              Hoffnungslosigkeit
            </li>
          </ul>

          <ul>
            <li>NOV11</li>
            <li>Golden Oriole | Partout Partout | Horacio Pollard | Wambel</li>
          </ul>

          <ul>
            <li>NOV5</li>
            <li>State Champion | Sajjanu</li>
          </ul>

          <ul>
            <li>NOV4</li>
            <li>State Champion | Coldsore | Broker</li>
          </ul>

          <ul>
            <li>OCT24</li>
            <li>YES DEER | Dwarphs | Belka</li>
          </ul>

          <ul>
            <li>OCT21</li>
            <li>Casual Hex | Hyäne | T6-DJ*ane-Team</li>
          </ul>

          <ul>
            <li>OCT15</li>
            <li>
              Antikaroshi | Astral Tide | RandomIsMyName | Hansen Windisch
            </li>
          </ul>

          <ul>
            <li>OCT2</li>
            <li>KURWS | Tister | Jævndøgn</li>
          </ul>

          <ul>
            <li>SEP19</li>
            <li>Minami Deutsch | Flying Moon in Space</li>
          </ul>

          <ul>
            <li>SEP18</li>
            <li>Mystic Inane | Warriors of Darkness | Cuntroaches | YOR</li>
          </ul>

          <ul>
            <li>SEP2</li>
            <li>Darren Eve Trio</li>
          </ul>

          <ul>
            <li>JUL12</li>
            <li>Less Win | Pelada | Abrichten</li>
          </ul>

          <ul>
            <li>JUL6</li>
            <li>Froe Char | Ame De Boue</li>
          </ul>

          <ul>
            <li>JUN8</li>
            <li>Die Emotionen</li>
          </ul>

          <ul>
            <li>JUN6</li>
            <li>SAUNA YOUTH (UK)</li>
          </ul>

          <ul>
            <li>MAY13</li>
            <li>NOIR REVA | PATIENT, PATIENT | JEFFK</li>
          </ul>

          <ul>
            <li>MAY10</li>
            <li>Black Zone Myth Chant | Chicaloyoh</li>
          </ul>

          <ul>
            <li>APR11</li>
            <li>
              AT BONA FIDE | CRYSTAL SODA CREAM | LAUNDERED SYRUP |
              WINKELSCHLEIFER
            </li>
          </ul>

          <ul>
            <li>APR5</li>
            <li>PAUWELS | BLANKA | NIVEAU 100</li>
          </ul>

          <ul>
            <li>APR4</li>
            <li>MOIN MOIN | VIKTOR'S JOY</li>
          </ul>

          <ul>
            <li>MAR26</li>
            <li>
              GOLDEN ORIOLE | もしもしSUPERMAGIC | Hot BoC (X) Time Machine
            </li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2015 = !content2015)}>2015</button>
      {#if content2015}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC4</li>
            <li>KUMULUS | WELL I WONDER | OSIS KRULL</li>
          </ul>

          <ul>
            <li>NOV24</li>
            <li>BATALJ | THE GASH | CUNTROACHES</li>
          </ul>

          <ul>
            <li>NOV13</li>
            <li>ASTRAL TIDE | FABIAN</li>
          </ul>

          <ul>
            <li>OCT22</li>
            <li>100% Chevalier | Lingua Nada</li>
          </ul>

          <ul>
            <li>OCT11</li>
            <li>DJ DINGO SUSI | JAMHED</li>
          </ul>

          <ul>
            <li>AUG16</li>
            <li>Fabian | At Bona Fide | Skrze Reku</li>
          </ul>

          <ul>
            <li>AUG15</li>
            <li>KÆLAN MIKLA | ABRICHTEN</li>
          </ul>

          <ul>
            <li>MAY23</li>
            <li>
              Elisabeth | Philipp Melon | LENZIAN KOWSKI | FAQ | DJ RIJKAARD
            </li>
          </ul>

          <ul>
            <li>MAY15</li>
            <li>PIGEON | YON | ROBOTRON</li>
          </ul>

          <ul>
            <li>APR2</li>
            <li>LINGUA NADA | TREEHOUSES</li>
          </ul>

          <ul>
            <li>MAR27</li>
            <li>LENZIAN KOWSKI, FAQ, DJ RIJKAARD</li>
          </ul>

          <ul>
            <li>FEB27</li>
            <li>Tarentatec | Pauwels</li>
          </ul>

          <ul>
            <li>FEB2</li>
            <li>MOLDE | DWARPHS | LINGUA NADA</li>
          </ul>

          <ul>
            <li>JAN29</li>
            <li>BALG | JAMES WELBURN | FUCHS TEUFELS WILD</li>
          </ul>

          <ul>
            <li>JAN17</li>
            <li>ALPHATRIP | TWODEADBANDS</li>
          </ul>

          <ul>
            <li>JAN15</li>
            <li>SFERICS | EMMANUELE GATTUSO | ABOVE THE TREE</li>
          </ul>
        </div>
      {/if}
    </div>

    <div class="year-container">
      <button on:click={() => (content2014 = !content2014)}>2014</button>
      {#if content2014}
        <div class="concertbox" transition:blur>
          <ul>
            <li>DEC11</li>
            <li>ACTION! ATTENTION! | SODALANE | QUADRUPÈDE</li>
          </ul>

          <ul>
            <li>NOV26</li>
            <li>GOLDEN DONNA & Robyrt Hecht</li>
          </ul>

          <ul>
            <li>NOV24</li>
            <li>ORDRE ETERN | COÀGUL</li>
          </ul>

          <ul>
            <li>NOV13</li>
            <li>FAR-OUT FANGTOOTH | AT BONA FIDE | PACINO</li>
          </ul>

          <!--NOV7	
Pop Universell präsentiert: Schwervon! // OTION // guns'n'gänseblümchen-->

          <ul>
            <li>NOV1</li>
            <li>Warm Graves | Jeffk</li>
          </ul>

          <ul>
            <li>OCT31</li>
            <li>ROOM204 | PAPER PLANES</li>
          </ul>

          <ul>
            <li>OCT17</li>
            <li>Less Win | 100%chevalier | Avventur</li>
          </ul>

          <ul>
            <li>OCT16</li>
            <li>MYTRIP</li>
          </ul>

          <ul>
            <li>OCT10</li>
            <li>WELS | KOKOMO</li>
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>
<footer>
  <button on:click="{() => scrollUp()}">⬆⬆⬆ Go back up!</button>
</footer>

<style>
  .year-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  button {
    background-color: rgb(241, 216, 104);
    padding: 0.3rem;
    border: 2px solid black;
    height: 2rem;
  }
  .concertbox {
    margin: 0 1rem;
  }
  footer {
    position: fixed;
    bottom: 0.25rem;
    right: 1rem;
  }
</style>
