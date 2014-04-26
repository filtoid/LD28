function RoomManager(){
	this.update = RM_Update;
	this.draw = RM_Draw;
	
	this.aryBlocks = new Array();
	this.aryBlocks[0] = new Location(40,40);
	this.aryBlocks[1] = new Location(20,40);
}

function RM_Update(){

}

function RM_Draw(ctx){
	var oldStyle = ctx.fillSTyle;
	
	ctx.fillStyle = "#0000ff";

	for(var i=0;i<this.aryBlocks.length;i++){
		ctx.fillRect(this.aryBlocks[i].x, this.aryBlocks[i].y, BLOCK_SIZE, BLOCK_SIZE);
	}
}