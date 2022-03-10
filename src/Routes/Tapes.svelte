<script>
    import { blur } from "svelte/transition";
    import { onMount } from "svelte";

onMount(() => {
    window.scrollTo(0, 0);
});
</script>

<div transition:blur >
    <h1>Tapestapestapes</h1>
    <p> At some point in my musical endeavours I started getting interested in tapes (as in music cassettes) and
        came to start a little tape label with some friends called <em>U-BAC</em>.
        You can check it out right here:</p>
    <div id="logo-links">
        <img src="/images/ubac_tooth_schreier.png" alt="U-Bac logo" id="ubac">
        
            <div><a class="linkbox" href="http://u-bac.net/">U-BAC website</a></div>
            <div><a class="linkbox" href="https://ubac.bandcamp.com/">U-BAC Bandcamp</a></div>
            <div><a class="linkbox" href="https://www.facebook.com/ubacrecords">U-BAC Facebook</a></div>
        
    </div>
    <p>Other than that I love to do mixtapes for friends and, for example, started a series of tapes with dub
        music.
        Here's the first three installations:</p>
    <ul>
        <li>
            <iframe title="mixtape" width="100%" height="120"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Foptimooptimo%2Fstaxl-mixtape-dub-aber-gut-1-a-b%2F"
                frameborder="0"></iframe>
        </li>
        <li>
            <iframe title="mixtape" width="100%" height="120"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Foptimooptimo%2Fstaxl-mixtape-dub-aber-gut-2-a-b%2F"
                frameborder="0"></iframe>
        </li>
        <li>
            <iframe title="mixtape" width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Foptimooptimo%2Fstaxl-mixtape-dub-aber-gut-3-a-b%2F" frameborder="0" ></iframe>
        </li>
    </ul>
    <p>The idea of DJing with tapes (TJing?) also caught my interest and I tried that out
        sometimes. Here's a 2-hour tape-only set I recorded for Leipzig online TV station <a
            href="http://hitness.club">Hitness Club</a>:</p>
    <ul>
        <li>
            <iframe title="mixtape" width="100%" height="120"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Foptimooptimo%2Fstaxl-2020-tj-set-4-hitnessclub-1st-hour%2F"
                frameborder="0"></iframe>
        </li>
        <li>
            <iframe title="mixtape" width="100%" height="120"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Foptimooptimo%2Fstaxl-2020-tj-set-4-hitnessclub-2nd-hour%2F"
                frameborder="0"></iframe>
        </li>
    </ul>
</div>

<style>
    #logo-links {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: repeat(3, 1fr);
        width: 100%;
    }
    #logo-links img {
        width: 100%;
        object-fit: contain;
        grid-area: 1 / 1 / 4 / 2
    }
    #logo-links div {
        margin: auto 1rem; 
    }
    #logo-links div:first-child {
        grid-row: 1 / 2;
    }
    #logo-links div:nth-child(2) {
        grid-row: 2 / 3;
    }
    #logo-links div:nth-child(3) {
        grid-row: 3 / 4;
    }
</style>