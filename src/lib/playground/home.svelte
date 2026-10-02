<script>
import Quantity from "./quantity.svelte";
let { maxValue = 6, page = $bindable("home"), params = $bindable(/** @type {any} */ ({})) } = $props();
let diceValue = 1+Math.floor(Math.random()*(maxValue-1));
let incorrectNum = Math.floor(Math.random()*diceValue);
</script>

<h1 style="text-align:center;">
	WhatIsMore-Dice+numbers
</h1>

<table align="center">
	<tbody>
		<tr>
		<td onclick={()=>{params.mode="dice";page="game"}}>
			<Quantity n={diceValue} mode="dice"
								fg={params.fg}
								bg={params.bg}												  
								bg_opacity={params.bg_opacity}></Quantity></td>
		<td onclick={()=>{params.mode="Correct_Dice";page="game"}}>
			<Quantity n={diceValue} mode="Correct_Dice"
								fg={params.fg}
								bg={params.bg}												  
								bg_opacity={params.bg_opacity}></Quantity></td>
		<td onclick={()=>{params.mode="Incorrect_Dice";page="game"}}>
			<Quantity n={diceValue} mode="Incorrect_Dice"
								num={incorrectNum}
								fg={params.fg}
								bg={params.bg}												  
								bg_opacity={params.bg_opacity}></Quantity></td>
			</tr>

		</tbody>
</table>

<div style="text-align:center; margin-top:40px;">
	<button onclick={()=>{params.experimentMode="explanation";page="experiment";}}>Comenzar explicación</button>
	<button onclick={()=>{params.experimentMode="experiment";page="experiment";}}>Comenzar experimento</button>
	<button onclick={()=>{params.experimentMode="direct";page="experiment";}}>Experimento sin explicación</button>
</div>

<div style="text-align:right;">
		last edited by <a href="https://github.com/NeiraDiego/">DiegoNeira</a>
</div>