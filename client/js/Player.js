var PLAYER_SPEED = 1;

function Player(){
	this.rotation = Math.PI;
	this.loc = new Location(20,20); // Location is the centre
	this.size = new Location(10,19);
	
	this.draw = PlayerDraw;
	this.update = playerUpdate;
	
	this.downwardAcc = 0;
	
	this.soundMute = false;
}

function PlayerDraw(ctx){
	// Our players location may vary to drawig location becuase of scrolling
	var drawLocX = this.loc.x;
	var drawLocY = this.loc.y;
	var canWidth = canvas.width;
	var canHeight = canvas.height;
	
	ctx.fillStyle="#FF0000";
	ctx.fillRect(this.loc.x, this.loc.y, this.size.x, this.size.y);

}

function playerUpdate(){
		
	// Save these for later in case we collide with something
	var oldLocX = this.loc.x;
	var oldLocY = this.loc.y;
	
	this.downwardAcc += _roomManager.gravity;
	this.loc.y += this.downwardAcc;
	
	var onFloor = false;
	
	if(_roomManager.checkCollision(this)){
		this.downwardAcc = 0;
		this.loc.y = oldLocY;
		onFloor = true;
	}
	
	// Do any animation stuff
	if(isKeyPressed('A')){
		this.loc.x-=PLAYER_SPEED;
	}
	if(isKeyPressed('D')){
		this.loc.x+=PLAYER_SPEED;
	}
	
	
	if(isKeyPressed('W') && onFloor){
		this.downwardAcc = -12;
	}
	if(isKeyPressed('S')){
		
	}
	
	if(_roomManager.checkCollision(this)){
		this.loc.x = oldLocX;
		
	}
	
}

