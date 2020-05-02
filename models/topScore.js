const db= require('../util/database');


module.exports=class topScore{
    constructor(user_id,total_score,best_game_score,player_defeded){
        this.user_id=user_id;
        this.total_score=total_score;
        this.best_game_score=best_game_score;
        this.player_defeded=player_defeded;
        db.execute('INSERT INTO user_score(user_id, total_score, best_game_score, total_players_defeded)VALUES(?, ?, ?, ?)',[user_id,total_score,best_game_score,player_defeded])

        
    }
    
    static findById(id){
      return  db.execute('SELECT * FROM user_score where user_id = ?',[id]);
        
    }
}