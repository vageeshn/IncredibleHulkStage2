class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update (state){
        database.ref('/').update({
            gameState : state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exist()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        hulk = createSprite(100,50);
    }
    play(){
        if(player !== undefined){
            background("white");
        
        }
        if(keyIsDown("space")){
            hulk.velocityY = -10;
        }
        hulk.velocityY = hulk.velocityY+0.5;
    }
}