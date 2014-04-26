var PLAYER_SPEED = 2;

function Player(){
	this.rotation = Math.PI;
	this.loc = new Location(20,20); // Location is the centre
	this.size = new Location(10,19);
	
	this.draw = PlayerDraw;
	this.update = playerUpdate;
	
	this.downwardAcc = 0;
	
	this.isJumping = false;
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
	if(this.downwardAcc>0){
		// Check to see if we have moved down into the floor
		if(_roomManager.checkCollision(this)){
			this.loc.y = oldLocY;
			onFloor = true;
			this.isJumping = false;
			this.downwardAcc = 0;
		}
	}else if(this.downwardAcc<0){
		// We are currently moving up
		if(_roomManager.checkCollision(this)){
			var quit=false;
			this.loc.y = oldLocY;
			var downacc = this.downwardAcc;
			
			while(quit==false){
				this.loc.y += downacc;
				if(_roomManager.checkCollision(this)){
					this.loc.y = oldLocY;
					downacc -= 1;
					this.loc.y += downacc;
					if(downacc<0){
						quit=true;
						this.loc.y = oldLocY;
					}
				}else{
					quit=true;
				}
			}
			this.downwardAcc = 0;
		}
	}
	
	// Do any animation stuff
	if(isKeyPressed('A')){
		this.loc.x-=PLAYER_SPEED;
	}
	if(isKeyPressed('D')){
		this.loc.x+=PLAYER_SPEED;
	}
	
	if(isKeyPressed('W') && this.isJumping==false){
		this.isJumping = true;
		this.downwardAcc = -12;
	}else if(this.isJumping){
		var temp = "fs";
	}
	
	if(isKeyPressed('S')){
		
	}
	
	if(_roomManager.checkCollision(this)){
		this.loc.x = oldLocX;
		
	}
	
}

