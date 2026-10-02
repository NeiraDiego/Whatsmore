<script>
import Dice from "./dice.svelte";
import Correct_Dice from "./correct_dice.svelte"
import Incorrect_Dice from "./incorrect_dice.svelte"
let { n = 5, bg = "white", fg = "black", bg_opacity = .9, width = 160, height = 160, mode = "dice", num = undefined } = $props();
</script>
{#if mode == "dice"}<Dice n={n}
													base_color_face={bg} 
													base_color_dot={fg}
												  bg_opacity={bg_opacity}
													width = {width}
													height= {height}
													></Dice>
{:else if mode == "Correct_Dice"}<Correct_Dice n={n}
													base_color_face={bg} 
													base_color_dot={fg}
												  bg_opacity={bg_opacity}
													width = {width}
													height= {height}
													></Correct_Dice> 
{:else if mode == "Incorrect_Dice"}<Incorrect_Dice n={n}
													num={num}
													base_color_face={bg} 
													base_color_dot={fg}
												  bg_opacity={bg_opacity}
													width = {width}
													height= {height}
													></Incorrect_Dice> 
{:else} {n}
{/if}