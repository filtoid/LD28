<!DOCTYPE html>
<html>
<head><title>Ludum Dare 29: Beneath The Surface</title>
	<script type="text/javascript" src="./js/keyHandlerUtils.js"></script>
	<script type="text/javascript" src="./js/FiltoidMaths.js"></script>
	<script type="text/javascript" src="./js/FiltoidGameLoop.js"></script>
	<script type="text/javascript" src="./js/FiltoidUtils.js"></script>
	<script type="text/javascript" src="./js/FiltoidCollisionManager.js"></script>
	<script type="text/javascript" src="./js/Player.js"></script>
	<script type="text/javascript" src="./js/RoomManager.js"></script>
	
	<!-- Addthe jquery library for some nice syntatic sugar :) -->
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	
</head>

<body onload="loadGame();">
<div id="canvas-div" style="width:100%; height:90%; margin:0px auto; border-width:3px; border-style:solid; border-color:#ff9900">
		<canvas id="canvas" width="100%" height="100%">
			<p>Your browser does not support the canvas element. I'm afraid I am only supporting Chrome during LD25 - I just don't have time to work through browser specific issues - Filtoid. Try it in other browsers though - it might work.</p>
		</canvas>
	</div>

</body>
</html>