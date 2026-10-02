<script>
let { page = $bindable("menu") } = $props();
function go(/** @type {string} */ home) { page = home; }
</script>

<div class="w3-bar w3-light-grey" id="w3menu">

  <div class="w3-dropdown-hover">
    <button class="w3-button">Menu</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
	  <button class="w3-button w3-bar-item " onclick={() => go("home")}>Home</button>
   	<button class="w3-button w3-bar-item " onclick={() => go("config")}>Configuration</button> 
    <button class="w3-button w3-bar-item " onclick={() => go("info")}>About</button>
		</div> 
  </div>
</div>
<style>
	/*
:global(#w3menu){
position: sticky;
	top: 20px;
		z-index:20;
		}
:global(.w3-dropdown-content){
			z-index:20;
		}
	*/
</style>