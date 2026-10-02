<script>
	// Local variables
// comentario de prueba
	let pressed = $state(false);
	// Imports
	import Home from "./home.svelte";
	import W3Menu from "./w3menu.svelte";
	import Game from "./game.svelte";
	import Config from "./config.svelte";
	import Info from "./info.svelte";	
	import Experiment from "./experiment.svelte";	
	
	/**
	 * @typedef {Object} Props
	 * @property {string} [page] - External Variables
	 * @property {any} [log]
	 * @property {any} [params]
	 */

	/** @type {Props} */
	let { page = $bindable("menu"), log = $bindable({ 
		test_number: 0,
		time_last_display: 0,
		text_diary: ["# Date Time (...) "],
		csv_diary: ["Test no, Test Name, Learner, Trainer, C_0, C_1, Value selected , Correction , Date, Answering Time (ms), Series, Variant, Trial, Labels"],
		text: new Blob(["# No test was executed before saving this text log. "], {type: 'text/plain'}),
		csv: new Blob(["# No test was executed before saving this csv log. "], {type: 'text/csv'})
	}), params = $bindable({
		waiting_time : 1,
		durationHomeButton : 0,
		noMoreBotton : false,
		noMoreSoundURL : "", 
		mode : 'dice',
	  randomMode: false,
		randomModes: false,		modes : ["dice","heap"],
		randomColors:false, colors : ["black","red","blue"],
		randomOpacity:false, opacities : [.2,.3,.5,.7,.9],
		nbChoices : 2,
		bg : "white",
		fg : "black",
		bg_opacity:".9",
		values : [1,2,3,4,5,6],
		repetitionsPerVersion : 20,
		numberOfSeries : 7,
		experimentMode : "direct",
		playSound : false,
		visualFeedback: true,
		visualFeedbackCorrect: '<h1 style="font-size:10vw; color:green; background-color: grey;">CORRECT!</h1>',
		visualFeedbackInCorrect: '<h1 style="font-size:10vw; color:red; background-color: grey;">INCORRECT!</h1>',
		correctSoundURL : "https://buho.dcc.uchile.cl/~inca-bat/sounds/correct.mp3",
		incorrectSoundURL : "https://buho.dcc.uchile.cl/~inca-bat/sounds/incorrect.mp3",
		gameFeatures : true,
    gameLength : 5,
		gameThresholds : {pass:.5, excel:.9},
		gameSoundsURLs: {fail: "https://buho.dcc.uchile.cl/~inca-bat/sounds/tryagain.mp3", 
										 pass: "https://buho.dcc.uchile.cl/~inca-bat/sounds/welldone.mp3", 
										 excel: "https://buho.dcc.uchile.cl/~inca-bat/sounds/excellent.mp3"},
		gameWaitingTimeForResultInMiliseconds: 2000,
		visualFeedbackFail: '<h1 style="font-size:10vw; color:red; background-color: grey;">FAIL!</h1>',
		visualFeedbackPass: '<h1 style="font-size:10vw; color:blue; background-color: grey;">PASS!</h1>',
		visualFeedbackExcellent: '<h1 style="font-size:10vw; color:green; background-color: grey;">EXCELLENT!</h1>',
		logInteractions : true,
		server : "https://buho.dcc.uchile.cl/~inca-bct/log.php",
		activeServer: false,
		learner: "Unnamed",
		teacher: "Diego Neira"
	}) } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</svelte:head>


{#if page == "game" || page == "experiment"}
<button 
	onclick={() => {pressed = true; page="home";}}
	onkeypress={() => {pressed = true; page = "home";}}
	onmouseenter={() => pressed = false}
>Exit</button>
{:else}
<W3Menu bind:page={page} />
{/if}

{#if page == "config"} <Config bind:params bind:log></Config>
{:else if page == "game"} <Game bind:params bind:log></Game>
{:else if page == "experiment"} <Experiment bind:params bind:log onDone={() => {page="home";}}></Experiment>
{:else if page == "info"} <Info></Info>
{:else} <Home bind:params bind:page></Home>
{/if}

<style>
	:global(body){
		 margin:0px;
	 	 padding:0px;
	}
</style>
