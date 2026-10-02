<h1 style="text-align:center;">About WhatIsMore-Dice+numbers</h1>

A simple web solution to compare the ability of animals (humans and non humans) trained in using touch interfaces to compare discrete (e.g. dice, heap of dots) and continuous (e.g. disc, rectangle) quantities with distinct color settings and an automatic log (even in context difficult for humans, such as low contrasts).

<h2>Known bugs</h2>
<ul>
	<li> drawings are not well centered</li>
	<li> play page can still be scrolled</li>
	<li> HTML input in VisualFeedback is not sanitized!
	(e.g. using https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API) </li>
</ul>

<h2>Pending Features</h2>
<ul>
	<li>Add separate parameters for visual display for exercises and games </li>
	<li>Record and configure separate audio feedback for exercises and games</li>
  <li>Display mode random dots
  <li>Display mode random dots with gravity
  <li> server side log 
	<li> client side automatic statistical analysis of the game log at the end of each log.</li>	
	<li> server side automatic statistical analysis of log per learner </li>
	<li> add option to upload (to the server?) personalized sounds for audio feedback.</li>
  <li> Random game modes: At each new GAME, draw a<ul>
   <li> random display mode, and/or
   <li> random colors and/or
   <li> random opacity 
	 </ul>
<li> Add statistic distance to results obtained from uniform random choices
<li> Add statistic distance to results obtained from always selecting the same
<li> min/max/median/Average Response time
<li> Add parameter to control the space between quantities in each exercise
<li> high scores table
<li> make surface of rect and disc vary linearly with n (rather than quadratically)
</ul>

<h3>
	Recently added features
</h3>
<ul>	
<li> Cleaned up code before sharing it with Psycho Informatics Students
</li>
</ul>

<h2>How to use it?</h2>
<ul>
	<li><i>Teacher</i> selects parameters of the game in the menu <i>Configuration</i>;</li>
	<li><i>Teacher</i> selects <i>Play</i> and presents the device to the <i>learner</i>, in a position where the <i>teacher</i> cannot see the screen, to insure they cannot hint the correct answers to the <i>learner</i>;
	<li><i>Learner</i> selects one of the quantities described;</li>
	<li><i>Teacher</i> rewards <i>Learner</i> if appropriate while the application readies the next challenge.</li>
</ul>
<h2>
	Privacy issues
</h2>

<i>A lawyer should add here text saying that the user agree to share its usage data for scientific usage</i>

<h2>Related pages</h2>

Checkout the <a href='http://whatismore.incalab.cl'>frontend</a> used in the experiments described in the related
<a href="https://dl.acm.org/doi/10.1145/3565995.3566040">article</a>,
and the <a href='https://gitlab.com/incalab/inca-bct'>sources</a> on github.<br>	

<h2>Credits/Acknowledgments</h2>
	The InCA-WhatIsMore project is a collaboration between<ul>		
<li>	<a href="https://barbay.cl">Jérémy Barbay</a> from <a href="https://inca.dcc.uchile.cl">InCA Labs</a> and <br>
<li>  <a href="https://joachim.barbay.cl">Joachim Barbay</a> from <a href="https://jobbyworld.cl">Jobby World</a>.
</ul>

		