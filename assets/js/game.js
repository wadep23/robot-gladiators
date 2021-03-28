// Game States
// "Win" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less


var fight = function(enemy){
    
        
    while(playerInfo.health > 0 && enemy.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip" || promptFight === 's'){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log('Player money',  playerInfo.money);
                break;
            }
            else {
                fight();
            }
        }
        // if player chooses to fight
        
        // Subtract the value of 'playerplayerInfo.attack from the velue of 'enemy.health' and use that result to update the value of 'enemy.health
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
        if (enemy.health <=0){
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        }else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to update the value of 'playerInfo.health'
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.name + " health remaining.");

        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }else {
            window.alert(playerInfo.name + " still has " + playerInfo.name + " health left.");
        }
    }
}
    
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0){
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemy.names.length - 1){
                var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

                if(storeConfirm){
                shop();
                }
            }
        }
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    };
    endGame();
};
var endGame = function(){
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money +".")
    }else {
        window.alert("you've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm){
    startGame();
    }else {
        window.alert('Thank you for playing Gladiators! Come back soon!');
    }
};
var shop = function(){
    var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?');
// switch cases used in place of if else statements
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            shop();
            break;
        default:
            window.alert("You didn't pick a valid option. Try again.");
            
            shop();
            break;
            // switches must include a break
    }
};
// created a random number variable to use in functions to randomly determine a player and enemy attack stat
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
    // needed to return that random number value to be used in other functions
}
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
        this.health += 20;
        this.money -= 7;
    }else {
        window.alert("you don't have enough money, you fool!");
    }
    },
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars!!");
            this.attack += 6;
            this.money -= 7;
        }else {
            window.alert("You don't have enough money, fool!!!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    },
];
startGame();