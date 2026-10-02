<script>
  import Quantity from "./quantity.svelte";
	import {dateInOrgmodeFormat} from "./log.js";
  import { onMount } from "svelte";

	let { params = $bindable(/** @type {any} */ ({})), log = $bindable(/** @type {any} */ ({})) } = $props();

let correctSound = new Audio(params.correctSoundURL);
let incorrectSound = new Audio(params.incorrectSoundURL);
let noMoreSound = new Audio(params.noMoreSoundURL);
let excellentSound = new Audio(params.gameSoundsURLs.excel);
let passSound = new Audio(params.gameSoundsURLs.pass);
let failSound = new Audio(params.gameSoundsURLs.fail);
let choices = $state(/** @type {number[]} */ ([]));
let labels = $state(/** @type {number[]} */ ([]));
let selection;
let selected = $state(false);
let correct = $state(false);
let exerciseResult = $state("");
let gameResult = $state("");
let waitingForReward = $state(false);
let nbCorrect = $state(0);
let nbIncorrect = $state(0);
// Initializing
reset();
newOne();
// Functions
function enterInLocalLog(/** @type {string} */ string) {
 //	  console.log(dateInOrgmodeFormat()+" "+string);
  	log.text_diary = [...log.text_diary,"\n"+dateInOrgmodeFormat()+" "+string];
   	log.text = new Blob(log.text_diary, {type: 'text/plain'});
}
function enterInCSVLog(/** @type {string} */ string) {
	  console.log(string);
   	log.csv_diary = [...log.csv_diary,"\n"+string];
   	log.csv = new Blob(log.csv_diary, {type: 'text/csv'});
}
function randInt(/** @type {number} */ a, /** @type {number} */ b){
	return a + Math.floor(Math.random()*(b-a+1));
}
function select(/** @type {number} */ c){		
	log.test_number ++;
	if(selected == false) {
		selected = true;
		selection = c;
		correct = true;
		var i;
		for(i=0;i<choices.length;i++){
	    if(choices[i]>selection) {
	       correct = false
			}
		}	
    var	d = new Date();
  	var response_time = Date.now()-log.time_last_display;
		//   csv_diary: ["Test no, Test Name, Learner, Trainer, C_0, C_1, Value selected , Correction , Date, Answering Time, Series, Variant, Trial, Labels"],
		enterInCSVLog(log.test_number+", "+params.mode+", "+params.learner+", "+params.teacher+", "+choices+", "+c+","+correct+", "+dateInOrgmodeFormat()+", "+response_time+", , , Labels ["+labels.join(", ")+"]");
		if(correct == true) {
				nbCorrect++;
		    if(params.visualFeedback){exerciseResult=params.visualFeedbackCorrect}
				if(params.playSound){					if(nbCorrect+nbIncorrect < params.gameLength){correctSound.play();}};
				enterInLocalLog(params.learner+" chose correctly "+c+" out of "+choices+" in mode '"+params.mode+"' with "+params.fg+" stuff on "+params.bg+" background."+((params.mode == "Incorrect_Dice") ? " Labels were ["+labels+"]." : ""));
		} else {
				nbIncorrect++;
	      if(params.visualFeedback){exerciseResult=params.visualFeedbackInCorrect}
				if(params.playSound){
					if(nbCorrect+nbIncorrect < params.gameLength){incorrectSound.play();}}
				enterInLocalLog(params.learner+" chose INcorrectly "+c+" out of "+choices+" in mode '"+params.mode+"' with "+params.fg+" stuff on "+params.bg+" background."+((params.mode == "Incorrect_Dice") ? " Labels were ["+labels+"]." : ""));
		}
		if(params.gameFeatures){
  		if(nbCorrect+nbIncorrect >= params.gameLength) {
				enterInLocalLog(params.learner+" finished a game: "+nbCorrect+" correct answers and "+nbIncorrect+" incorrect answers.");
	  	  if(nbCorrect >= params.gameThresholds.excel*params.gameLength) {
		  		if(params.playSound){setTimeout(() => {excellentSound.play();},params.gameWaitingTimeForResultInMiliseconds);};
	        if(params.visualFeedback){gameResult=params.visualFeedbackExcellent}
					console.log("Excellent")
			  } else if (nbCorrect>=params.gameThresholds.pass*params.gameLength) {
				  if(params.playSound){setTimeout(() => {passSound.play();},params.gameWaitingTimeForResultInMiliseconds);};
	        if(params.visualFeedback){gameResult=params.visualFeedbackPass}
					console.log("Pass")
			  } else {
				  if(params.playSound){setTimeout(() => {failSound.play();},params.gameWaitingTimeForResultInMiliseconds);};
	        if(params.visualFeedback){gameResult=params.visualFeedbackFail}
					console.log("Fail")
			  }	
				waitingForReward = true;
  		}
		}
		if(!waitingForReward){
  		setTimeout(() => {newOne();}, params.waiting_time*1000);
		}
	}
	}
	function reset(){
	 nbCorrect = 0;
	 nbIncorrect = 0;
	 gameResult = "";
	}	
	function newOne() {
		// Generates a random pair of distinct integers from [1..{maxNumber}]
		var i,r
		for(i=0; i<params.nbChoices; i++){
			r = Math.floor(Math.random()*(params.values.length-i));
			[params.values[i],params.values[i+r]]=[params.values[i+r],params.values[i]] // swap the two values
		}
		choices = []
		for(i=0; i<params.nbChoices; i++){
			choices = [...choices,params.values[i]]
		}
		labels = [...choices]
		if(params.mode == "Incorrect_Dice" && choices.length == 2) {
			var maxVal = Math.max(choices[0], choices[1]);
			var minVal = Math.min(choices[0], choices[1]);
			labels = choices.map((v) => v == maxVal ? randInt(0,minVal) : randInt(maxVal,9));
		}
		selected = false;
		correct = false;
		exerciseResult = ""; 
  	log.time_last_display = Date.now();
	}
	onMount(() => {
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	function onKey(/** @type {KeyboardEvent} */ e){
		if(choices.length == 2 && !selected){
			if(e.key == "ArrowLeft"){ e.preventDefault(); select(choices[0]); }
			else if(e.key == "ArrowRight"){ e.preventDefault(); select(choices[1]); }
		}
	}
</script>

<h1 style="text-align:center;">What's more?</h1>

{#if !selected}
<div style="--nbChoices: {params.nbChoices}">
			{#each choices as c, i}
   	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<span 
				aria-keyshortcuts="A"
				onclick={()=>select(c)}
				onkeydown={()=>select(c)}
				role="navigation">
				<Quantity n={c} 
						mode={params.mode}
						num={labels[i]}
						fg={params.fg}
						bg={params.bg}												  
						bg_opacity={params.bg_opacity}
						></Quantity>
		</span>
		{/each}
</div>
{:else}
{#if params.visualFeedback}
<center>{@html exerciseResult}</center>
<center>{@html gameResult}</center>
{/if}
{/if}
{#if params.noMoreBotton}
<button onclick={() => {noMoreSound.play();}}>No more</button>
{/if}
{#if waitingForReward}
<center>
<button onclick={() => {waitingForReward=false;reset();newOne()}} class="for_birds">Play again?</button>
</center>
{/if}

<center>(+{nbCorrect},-{nbIncorrect}) {#if params.gameFeatures} among {params.gameLength}{/if}</center>

<style>
	span{
	margin-left: calc( (90vw - var(--nbChoices) * 160px ) / ( var(--nbChoices) + 1 ) );
	}

.for_birds {
  display: inline-block;
  width: 100px; 
  height: 100px; 
  text-align: center;
  border: gray;
  background-color: #E8562A;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
</style>