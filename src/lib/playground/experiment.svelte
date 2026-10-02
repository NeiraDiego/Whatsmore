<!-- Orquestador del experimento completo: series × variantes [dice, Correct_Dice, Incorrect_Dice] × repeticiones. -->
<script>
	import { onMount } from "svelte";
	import Quantity from "./quantity.svelte";
	import Explanation from "./explanation.svelte";
	import { dateInOrgmodeFormat } from "./log.js";

	let { params = $bindable(/** @type {any} */ ({})), log = $bindable(/** @type {any} */ ({})), onDone = () => {} } = $props();

	const variants = /** @type {const} */ (["dice", "Correct_Dice", "Incorrect_Dice"]);

	let phase = $state(params.experimentMode == "explanation" ? "idle" : "identify"); // "identify" (nombres) | "idle" (explicación) | "modeSwitch" (nuevo modo) | "trials" | "done"
	let showExplanation = params.experimentMode == "explanation" || params.experimentMode == "experiment";

	let seriesIndex = $state(0);
	let variantIndex = $state(0);
	let trialIndex = $state(0);
	let left = $state({ value: 1, num: 1 });
	let right = $state({ value: 2, num: 2 });
	let selected = $state(false);
	let selection = null;
	let correct = $state(false);
	let exerciseResult = $state("");
	let nbCorrect = $state(0);
	let nbIncorrect = $state(0);
	let progress = $derived(variantIndex * params.repetitionsPerVersion + trialIndex + 1);
	/** @type {ReturnType<typeof setTimeout>} */
	let activeTimeout;

	/**
	 * @param {number} a
	 * @param {number} b
	 */
	function randInt(a, b) {
		return a + Math.floor(Math.random() * (b - a + 1));
	}
	/** @param {number[]} array */
	function shuffle(array) {
		const a = [...array];
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
	/** @returns {"dice" | "Correct_Dice" | "Incorrect_Dice"} */
	function currentVariant() {
		return variants[variantIndex];
	}
	/** @param {string} string */
	function enterInLocalLog(string) {
		log.text_diary = [...log.text_diary, "\n" + dateInOrgmodeFormat() + " " + string];
		log.text = new Blob(log.text_diary, { type: "text/plain" });
	}
	/** @param {string} string */
	function enterInCSVLog(string) {
		console.log(string);
		log.csv_diary = [...log.csv_diary, "\n" + string];
		log.csv = new Blob(log.csv_diary, { type: "text/csv" });
	}
	function newOne() {
		const pair = shuffle(params.values).slice(0, 2);
		const a = pair[0];
		const b = pair[1];
		const leftVal = Math.random() < 0.5 ? a : b;
		const rightVal = leftVal === a ? b : a;
		const maxVal = Math.max(leftVal, rightVal);
		const minVal = Math.min(leftVal, rightVal);
		let numL = leftVal;
		let numR = rightVal;
		if (currentVariant() == "Incorrect_Dice") {
			numL = leftVal === maxVal ? randInt(0, minVal) : randInt(maxVal, 9);
			numR = rightVal === maxVal ? randInt(0, minVal) : randInt(maxVal, 9);
		}
		left = { value: leftVal, num: numL };
		right = { value: rightVal, num: numR };
		selected = false;
		selection = null;
		correct = false;
		exerciseResult = "";
		log.time_last_display = Date.now();
	}
	function startExperiment() {
		phase = "trials";
		seriesIndex = 0;
		variantIndex = 0;
		trialIndex = 0;
		nbCorrect = 0;
		nbIncorrect = 0;
		enterInLocalLog(params.learner + " started the experiment: " + params.numberOfSeries + " series of " + params.repetitionsPerVersion + " trials per variant (dice, correct dice, incorrect dice).");
		newOne();
	}
	function next() {
		trialIndex++;
		if (trialIndex >= params.repetitionsPerVersion) {
			trialIndex = 0;
			variantIndex++;
			if (variantIndex >= variants.length) {
				variantIndex = 0;
				seriesIndex++;
				if (seriesIndex >= params.numberOfSeries) {
					phase = "done";
					enterInLocalLog(params.learner + " finished the experiment: " + nbCorrect + " correct answers and " + nbIncorrect + " incorrect answers.");
					return;
				}
			}
			phase = "modeSwitch";
			return;
		}
		newOne();
	}
	function continueAfterSwitch() {
		if (phase != "modeSwitch") return;
		phase = "trials";
		newOne();
	}
	/** @param {"left" | "right"} side */
	function select(side) {
		if (selected || phase != "trials") return;
		selected = true;
		selection = side;
		const chosen = side == "left" ? left.value : right.value;
		const other = side == "left" ? right.value : left.value;
		correct = chosen > other;
		log.test_number++;
		const response_time = Date.now() - log.time_last_display;
		const variant = currentVariant();
		const labels = "[" + left.num + ", " + right.num + "]";
		enterInCSVLog(log.test_number + ", " + variant + ", " + params.learner + ", " + params.teacher + ", " + left.value + ", " + right.value + ", " + chosen + ", " + correct + ", " + dateInOrgmodeFormat() + ", " + response_time + ", " + (seriesIndex + 1) + ", " + (variantIndex + 1) + ", " + (trialIndex + 1) + ", Labels " + labels);
		if (correct) {
			nbCorrect++;
			exerciseResult = params.visualFeedback ? params.visualFeedbackCorrect : "";
			enterInLocalLog(params.learner + " chose correctly the " + selection + " dice (" + chosen + " dots) over " + other + " in variant '" + variant + "' with labels " + labels + ".");
		} else {
			nbIncorrect++;
			exerciseResult = params.visualFeedback ? params.visualFeedbackInCorrect : "";
			enterInLocalLog(params.learner + " chose incorrectly the " + selection + " dice (" + chosen + " dots) over " + other + " in variant '" + variant + "' with labels " + labels + ".");
		}
		activeTimeout = setTimeout(() => { next(); }, (params.waiting_time || 1) * 1000);
	}
	function onKey(/** @type {KeyboardEvent} */ e) {
		if (phase == "modeSwitch") {
			if (e.key == "ArrowLeft" || e.key == "ArrowRight") { e.preventDefault(); continueAfterSwitch(); }
			return;
		}
		if (phase != "trials") return;
		if (e.key == "ArrowLeft") { e.preventDefault(); select("left"); }
		else if (e.key == "ArrowRight") { e.preventDefault(); select("right"); }
	}
	onMount(() => {
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			clearTimeout(activeTimeout);
		};
	});
	function identifyDone() {
		if (showExplanation) {
			phase = "idle";
		} else {
			startExperiment();
		}
	}
	function explanationFinished() {
		if (params.experimentMode == "explanation") {
			onDone();
		} else {
			startExperiment();
		}
	}
</script>

{#if phase == "identify"}
	<h1 style="text-align:center;">Identificación</h1>
	<div style="text-align:center;">
		<label>Learner's name: <input bind:value={params.learner} placeholder="Unnamed"></label><br>
		<label>Instructor's name: <input bind:value={params.teacher} placeholder="Diego Neira"></label><br><br>
		<button onclick={identifyDone}>Comenzar</button>
	</div>
{:else if showExplanation && phase == "idle"}
	<Explanation onDone={explanationFinished} finishLabel={params.experimentMode == "explanation" ? "Volver al inicio" : "Comenzar experimento"} params={params} />
{:else if phase == "modeSwitch"}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_click_events_have_key_events -->
	<div onclick={continueAfterSwitch} role="button" tabindex="0" style="text-align:center; cursor:pointer; padding:40px;">
		<h1>nuevo modo</h1>
		<p>Haz clic o presiona una flecha (←/→) para continuar</p>
	</div>
{:else if phase == "trials"}
	<h1 style="text-align:center;">¿Qué dado tiene más puntos?</h1>
	<div class="pair" style="--count: 2">
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<span onclick={()=>select("left")} onkeydown={()=>select("left")} role="button" tabindex="0">
			<Quantity n={left.value} mode={currentVariant()} num={left.num} fg={params.fg} bg={params.bg} bg_opacity={params.bg_opacity} />
		</span>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<span onclick={()=>select("right")} onkeydown={()=>select("right")} role="button" tabindex="0">
			<Quantity n={right.value} mode={currentVariant()} num={right.num} fg={params.fg} bg={params.bg} bg_opacity={params.bg_opacity} />
		</span>
	</div>
	{#if exerciseResult}
	<center>{@html exerciseResult}</center>
	{/if}
	<center>Progreso: {progress}/{params.repetitionsPerVersion * variants.length} de {seriesIndex + 1}/{params.numberOfSeries}</center>
{:else if phase == "done"}
	<h1 style="text-align:center;">Fin del experimento</h1>
	<p style="text-align:center;">Aciertos: {nbCorrect} de {nbCorrect + nbIncorrect}</p>
	<center><button onclick={() => onDone()}>Volver al inicio</button></center>
{/if}

<style>
	span{
		margin-left: calc( (90vw - var(--count) * 160px ) / ( var(--count) + 1 ) );
		cursor: pointer;
	}
</style>