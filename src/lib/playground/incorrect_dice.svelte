<!-- Draws a dice face (n from 1 to 6) where each dot shows a deliberately wrong number. -->
<script>
	let { n = 5, num = n, base_color_face = "white", base_color_dot = "black", bg_opacity = .9, width = 160, height = 160 } = $props();
	let radius = 20;
	const dots = /** @type {Record<number, number[][]>} */ ({
		6: [[32,32],[32,75],[118,75],[32,118],[118,32],[118,118]],
		5: [[32,32],[32,118],[118,32],[75,75],[118,118]],
		4: [[32,32],[32,118],[118,32],[118,118]],
		3: [[32,32],[75,75],[118,118]],
		2: [[32,32],[118,118]],
		1: [[75,75]]
	});
</script>
<svg width={width} height={height}>
  <rect x="5" y="5" rx="20" ry="20" width="150" height="150" fill={base_color_face} fill-opacity={bg_opacity}/>
	{#each (dots[n] || []) as [x, y]}
	 <circle cx={x} cy={y} r={radius} fill={base_color_dot} />
	 <text x={x} y={y} text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{/each}
</svg>
<style>
	rect{
 stroke:black;
stroke-width:5;
		opacity:.9;
	}
	circle{
stroke:black;
stroke-width:0;
		opacity:1;
	}
</style>