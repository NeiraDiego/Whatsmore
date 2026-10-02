// log.js
// Variables y functions to keep both a local and external log.

// External Functions
export function enterInLocalLog(/** @type {any} */ log, /** @type {string} */ string) {    // This is currently not executed, rather a local function in game.svelte.
	console.log("Function from module log.js")
	//  console.log(dateInOrgmodeFormat()+" "+string);
  	log.diary = [...log.diary,"\n"+dateInOrgmodeFormat()+" "+string];
//  	log.blob = new Blob(log.diary, {type: 'text/plain'});
}

// Internal Functions
export function value2digits(/** @type {number} */ value){ 
    return (value < 10 ? '0' : '') + value;
}
export function dateInOrgmodeFormat(){
	  let d = new Date()
		return "["
			+d.getFullYear()
			+"-"
			+value2digits(d.getMonth()+1)
			+"-"
			+value2digits(d.getDate())
		  +" "
		  +value2digits(d.getHours())
  		+":"	
		+value2digits(d.getMinutes())
		+"("
		+value2digits(d.getSeconds())
		+"."
		+d.getMilliseconds()
		+")"
			+"]"
}
