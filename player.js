class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0 
    }

    //read the playerCount value from database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

     //write the player name and distance value to the database
     updateInfo(){
        database.ref("players/player"+this.index).set({
            name: this.name,
            distance: this.distance,   
        })
    }

    //reads all the information of all 4 players
    static getplayersinfo(){
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }
}