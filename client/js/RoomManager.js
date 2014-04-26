function RoomManager(){
	this.update = RM_Update;
	this.draw = RM_Draw;
	this.checkCollision = RM_Collision;
	
	this.gravity = 0.4;
	
	this.aryBlocks = new Array();
	this.aryBlocks[0] = new Object();
	this.aryBlocks[0].loc = new Location(40,40);
	this.aryBlocks[0].size = new Location(20,20);
	this.aryBlocks[1] = new Object();
	this.aryBlocks[1].loc = new Location(20,40);
	this.aryBlocks[1].size = new Location(20,20);
	
	var index = 1;
	
	for(var i = 0; i<400; i=i+20){
		index += 1;
		this.aryBlocks[index] = new Object();
		this.aryBlocks[index].loc = new Location(i,380);
		this.aryBlocks[index].size = new Location(20,20);
	}
	
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(100,300);
	this.aryBlocks[index].size = new Location(20,20);
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(120,300);
	this.aryBlocks[index].size = new Location(20,20);
	
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(180,260);
	this.aryBlocks[index].size = new Location(20,20);
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(200,260);
	this.aryBlocks[index].size = new Location(20,20);
	
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(100,200);
	this.aryBlocks[index].size = new Location(20,20);
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(120,200);
	this.aryBlocks[index].size = new Location(20,20);
	
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(60,100);
	this.aryBlocks[index].size = new Location(20,20);
	index += 1;
	this.aryBlocks[index] = new Object();
	this.aryBlocks[index].loc = new Location(80,100);
	this.aryBlocks[index].size = new Location(20,20);
	
	this.room = new Object();
	this.room.width = 400;
	this.room.height = 400;
}

function RM_Update(){

}

function RM_Draw(ctx){
	var oldStyle = ctx.fillSTyle;
	
	ctx.fillStyle = "#0000ff";

	for(var i=0;i<this.aryBlocks.length;i++){
		ctx.fillRect(this.aryBlocks[i].loc.x, this.aryBlocks[i].loc.y, this.aryBlocks[i].size.x, this.aryBlocks[i].size.y);
	}
}

function RM_Collision(obj){
	if(obj.loc.x <= 0 || obj.loc.y <= 0 ||
		obj.loc.x + obj.size.x >= this.room.width 
		|| obj.loc.y+obj.size.y >= this.room.height)
		return true;

	// Check if an object has collided by checking it's 
	for(var i=0;i<this.aryBlocks.length;i++){
		if(FiltoidCheckTwoSquaresCollide(obj,this.aryBlocks[i]))
			return true;
	}
	
	return false;
}