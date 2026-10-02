<script>
	import {dateInOrgmodeFormat} from "./log.js";
	// Parameters	
	let { log = $bindable(/** @type {any} */ ({})), params = $bindable(/** @type {any} */ ({})) } = $props();
	
	// Functions
	function resetLogs() {
		console.log("Reseting the logs.");
		log = { 
  		test_number: 0,
	  	time_last_display: 0,
		  text_diary: ["# Date Time (...) "],
		  csv_diary: ["Test no, Test Name, Learner, Trainer, C_0, C_1, Value selected , Correction , Date, Answering Time (ms), Series, Variant, Trial, Labels"],
		  text: new Blob(["# No test was executed before saving this text log. "], {type: 'text/plain'}),
		  csv: new Blob(["# No test was executed before saving this csv log. "], {type: 'text/csv'})
		};
	}
	function fileName() {
		return dateInOrgmodeFormat()+"-InCA-BCT-"+params.learner+" trained by "+params.teacher;
	}
	function seeTXTFile(){
		console.log("Open TXT in new window");
		console.log(log.text_diary);
		const blob = new Blob(log.text_diary, {type: 'text/plain'});
		const url = URL.createObjectURL(blob);
		window.open(url, '_blank');
		console.log("Opened TXT in new window");
	}	
	function seeCSVFile(){
		console.log("Open CSV in new window");
		console.log(log.csv_diary);
		const blob = new Blob(log.csv_diary, {type: 'text/plain'});
		const url = URL.createObjectURL(blob);
		window.open(url, '_blank');
		console.log("Opened CSV in new window");
	}
</script>

<style>
	input[type=checkbox],
	input[type=radio]
	{
    transform: scale(2);
			margin-left:30px;
			margin-right:10px;
	}
	label{
	margin:10px;
	}
	input[type='text']{width:100%}
</style>

<h1 style="text-align:center;">Configuration</h1>

<h2>Logs</h2> 
{#if params.logInteractions}
<ul>
<li><label>Learner's name: <input bind:value={params.learner} placeholder={params.learner}></label>
<li><label>Instructor's name: <input bind:value={params.teacher} placeholder={params.teacher}></label>
<li>OPEN the log in 
  <button onclick={seeTXTFile}>TEXT</button> or 
  <button onclick={seeCSVFile}>CSV</button> format.
<li> <button onclick={resetLogs}>RESET the log</button></li>
</ul>
{/if}

<h2>Game features</h2>
<h3>Juegos individuales</h3>
<label>Repeticiones de un juego individual: {params.gameLength}
	<input type=range bind:value={params.gameLength} min=1 max=50>
</label>
<h3>Experimentos</h3>
<label>Repetitions per version (ensayos por bloque): {params.repetitionsPerVersion}
	<input type=range bind:value={params.repetitionsPerVersion} min=1 max=50>
</label>
<label>Number of series: {params.numberOfSeries}
	<input type=range bind:value={params.numberOfSeries} min=1 max=20>
</label>
<label>Waiting time between exercises: {params.waiting_time} seconds
	<input type=range bind:value={params.waiting_time} min=0 max=10 step=0.1>
</label>