class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    immunity=createSprite(100,200);
        immunity.addImage("immunity",immunity);
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        ;
        fill("black");
        
        if (index === player.index){
          fill("red");
          textSize(15);
          strokeWeight(4);
          text(allPlayers[plr].name,x-cars[index-1].width/2,y-50);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=20
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank=player.rank+1;
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    alert("Game Ended. Your rank is " + player.rank);
  }
}
