<!-- Draws a dice face with values from 0 to 9 -->
<script>
	let { n = 5, base_color_face = "white", base_color_dot = "black", bg_opacity = .9, width = 160, height = 160 } = $props();
	let num = $derived(n);
	let radius = 20;
</script>
<svg width={width} height={height}>
  <rect x="5" y="5" rx="20" ry="20" width="150" height="150" fill={base_color_face} fill-opacity={bg_opacity}/>
	{#if n==9}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="32" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="118" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="32" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==8}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="32" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="118" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==7}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="32" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="118" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==6}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="32" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="75" r={radius}   fill={base_color_dot}/>
	 <text x="118" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==5}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==4}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="32" cy="118" r={radius}  fill={base_color_dot} />
	 <text x="32" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="32" r={radius}  fill={base_color_dot} />
	 <text x="118" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==3}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==2}
	 <circle cx="32" cy="32" r={radius} fill={base_color_dot} />
	 <text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	 <circle cx="118" cy="118" r={radius}  fill={base_color_dot}/>
	 <text x="118" y="118" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{:else if n==1}
	 <circle cx="75" cy="75" r={radius}  fill={base_color_dot}/>
	 <text x="75" y="75" text-anchor="middle" dominant-baseline="central" font-size={radius * 1.5} fill="white" font-weight="bold">{num}</text>
	{/if}
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