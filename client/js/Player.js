var PLAYER_SPEED = 1;

function Player(){
	this.rotation = Math.PI;
	this.loc = new Location(20,20); // Location is the centre
	
	this.draw = PlayerDraw;
	this.update = playerUpdate;
	
	this.soundMute = false;
}

function PlayerDraw(ctx){
	// Our players location may vary to drawig location becuase of scrolling
	var drawLocX = this.loc.x;
	var drawLocY = this.loc.y;
	var canWidth = canvas.width;
	var canHeight = canvas.height;
	
	// debug console output
	//document.getElementById("debug-console").innerText = "playerX: " + this.loc.x + ", playerY: " + this.loc.y + "drawLocX:" + drawLocX + ", drawLocY: " + drawLocY + ", canWidth: " + canWidth + ", canHeight: " + canHeight + ", roomWidth: " + roomWidth + ", roomHeight: " + roomHeight ;
	
	// We need to move the drawing context so the center of the image will be 0,0
	//ctx.translate(drawLocX,drawLocY);
	// Do the rotation
	//ctx.rotate(this.rotation);
	// We need to draw the image center at  0,0
	ctx.fillStyle="#FF0000";
	ctx.fillRect(this.loc.x, this.loc.y, BLOCK_SIZE, BLOCK_SIZE);

}

function playerUpdate(){
		
	// Save these for later in case we collide with something
	var oldLocX = this.loc.x;
	var oldLocY = this.loc.y;
	
	// Do any animation stuff
	if(isKeyPressed('A')){
		this.loc.x-=PLAYER_SPEED;
	}
	if(isKeyPressed('D')){
		this.loc.x+=PLAYER_SPEED;
	}
	if(isKeyPressed('W')){
		this.loc.y-=0.5;
	}
	if(isKeyPressed('S')){
		this.loc.y+=0.5;
	}
}

