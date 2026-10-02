<!-- Pantallas de explicación. Las que tienen `left`/`right` son interactivas (se debe elegir el dado con más puntos: clic o flechas ←/→); las de solo texto usan botones. -->
<script>
	import { onMount } from "svelte";
	import Quantity from "./quantity.svelte";

	/**
	 * @typedef {{ value: number, num?: number, mode: "dice" | "Correct_Dice" | "Incorrect_Dice" }} DiceConfig
	 * @typedef {{ title: string, body: string[], left?: DiceConfig, right?: DiceConfig }} Screen
	 */

	let { onDone = () => {}, finishLabel = "Comenzar", params = /** @type {any} */ ({}) } = $props();

	/** @type {Screen[]} */
	const screens = [
		{
			title: "En esta actividad",
			body: [
				"Tu tarea es indicar cuál de los dos dados que te mostraremos tiene más puntos.",
				"Primero revisaremos cómo funciona y luego pasaremos a la acción.",
				"Haz clic sobre el dado que tiene más puntos."
			],
			left: { value: 1, mode: "dice" },
			right: { value: 3, mode: "dice" }
		},
		{
			title: "También puedes utilizar las flechas del teclado",
			body: [
				"Puedes usar las flechas del teclado (← y →) para elegir el dado con la mayor cantidad de puntos.",
				"Selecciona con las flechas el dado con mayor cantidad de puntos."
			],
			left: { value: 3, mode: "dice" },
			right: { value: 6, mode: "dice" }
		},
		{
			title: "Ahora los dados tendrán un número",
			body: [
				"En estos dados, cada punto muestra un número que coincide con la cantidad de puntos.",
				"Haz clic (o usa las flechas) sobre el dado que tiene más puntos."
			],
			left: { value: 2, mode: "Correct_Dice" },
			right: { value: 5, mode: "Correct_Dice" }
		},
		{
			title: "SIEMPRE debes contar los puntos",
			body: [
				"Porque otras veces los números no coinciden con la cantidad de puntos.",
				"Haz clic (o usa las flechas) sobre el dado que tiene más puntos."
			],
			left: { value: 3, num: 6, mode: "Incorrect_Dice" },
			right: { value: 5, num: 1, mode: "Incorrect_Dice" }
		},
		{
			title: "Listo para comenzar",
			body: [
				"Ahora ya estás listo para pasar al experimento.",
				"Tus resultados serán mostrados de forma anónima: se informará que participaste, pero no cuáles resultados corresponden a tu intento."
			]
		}
	];

	let i = $state(0);
	let wrong = $state(false);
	let screen = $derived(screens[i]);
	let correctSide = $derived(screen.left && screen.right ? (screen.left.value >= screen.right.value ? "left" : "right") : null);
	let summary = $derived("A continuación te mostraremos " + (params.numberOfSeries || 7) + " series de " + ((params.repetitionsPerVersion || 20) * 3) + " dados (" + (params.repetitionsPerVersion || 20) + " sin número y " + ((params.repetitionsPerVersion || 20) * 2) + " con números).");

	function trySelect(/** @type {"left" | "right"} */ side) {
		if (!screen.left || !screen.right) return;
		if (side == correctSide) next();
		else wrong = true;
	}

	function next() {
		if (i < screens.length - 1) i++;
		else onDone();
		wrong = false;
	}

	function prev() {
		if (i > 0) i--;
		wrong = false;
	}

	function onKey(/** @type {KeyboardEvent} */ e) {
		if (!screen.left || !screen.right) return;
		if (e.key == "ArrowLeft") { e.preventDefault(); trySelect("left"); }
		else if (e.key == "ArrowRight") { e.preventDefault(); trySelect("right"); }
	}

	onMount(() => {
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
</script>

<h1 style="text-align:center;">{screen.title}</h1>
{#each screen.body as paragraph}
<p style="text-align:center;">{paragraph}</p>
{/each}
{#if i == screens.length - 1}
<p style="text-align:center;">{summary}</p>
{/if}

{#if screen.left && screen.right}
	<div class="pair" style="--count: 2">
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_click_events_have_key_events -->
		<span onclick={() => trySelect("left")} role="button" tabindex="0">
			<Quantity n={screen.left.value} mode={screen.left.mode} num={screen.left.num} fg="black" bg="white" bg_opacity={0.9} />
		</span>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_click_events_have_key_events -->
		<span onclick={() => trySelect("right")} role="button" tabindex="0">
			<Quantity n={screen.right.value} mode={screen.right.mode} num={screen.right.num} fg="black" bg="white" bg_opacity={0.9} />
		</span>
	</div>
	{#if wrong}
	<p style="text-align:center; color:red; font-weight:bold;">debes seleccionar el que tiene MAS puntos</p>
	{/if}
{:else}
	<center>
		<button onclick={prev} disabled={i == 0}>Anterior</button>
		<button onclick={next}>{i == screens.length - 1 ? finishLabel : "Siguiente"}</button>
	</center>
{/if}
<p style="text-align:center;">Pantalla {i + 1} de {screens.length}</p>

<style>
	span {
		margin-left: calc( (90vw - var(--count) * 160px ) / ( var(--count) + 1 ) );
		cursor: pointer;
	}
</style>