// Game States
// "Win" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robots name?");
console.log(
    "Player robot's name is " + playerName + "!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
        
    while(playerHealth > 0 && enemyHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip" || promptFight === 's'){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log('Player money',  playerMoney);
                break;
            }
            else {
                fight();
            }
        }
        // if player chooses to fight
        
        // Subtract the value of 'playerAttack from the velue of 'enemyHealth' and use that result to update the value of 'enemyHealth
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);

        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value of 'playerHealth'
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
    
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0){
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1){
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
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +".")
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
            if(playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");

            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }else{
                window.alert("you don't have enough money, fool!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){

                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }else{
                window.alert("You don't have neough money, fool!");
            }

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
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
startGame();