/*
Miguel Camacho
SDI 1212
Project 2
Enemy Ambush
*/
alert("JavaScript works!");

//Variables
var	playerWeapon = "Barreta M9",
	playerLocation = "thick, dark forest",
	playerName = "Coulton",
	playerPartner = "Harris",
	playerCreateSound = true,
	playerLost = true,
	enemyFound = true,
	playerFound = false,
	playerSpotted = false;

//Console
console.log ("During a recon mission," + playerName + " has become separated from his partner.");
console.log (playerName + " thought he was near his partner but it turns out he has fallen behind further than anticipated.");
console.log ("Darn it, " + playerName + ",what have you gotten yourself into this time?");
console.log(playerName +" fears that he could be lost in this " + playerLocation + ".");
if (playerLost === true){
	console.log("\"Looks like you're lost alright\" he muttered to himself.");
} else {
		console.log("I'm sure I can get out of this messin no time!");
};
console.log("Suddenly, " + playerName + " hears some noises ahead and decides to investigate");
if ((enemyFound && playerFound) || playerSpotted){
	console.log("\"Looks like friendlies, I should be able to greet them!\"");
} else {
	console.log("\"Looks like hostiles, I should back away from here.\"");
};
console.log(playerName + " begins to step backwards in the dark, away from the 3 hostiles before him.");
if (playerCreateSound = false){
	console.log(playerName + "was able to sneak away without the hostiles noticing.")
} else {
	console.log("Moving away, " + playerName +" steps on a dry branch causing a loud crack.");
};
console.log("The three hotiles become startled and start heading towards his direction.");
console.log("Noticing " + playerName + "\'s shiloutte in the dark, the hostiles begin opening fire.");
console.log("All " + playerName + " could do now is return fire and hope to get out of this mess.");
var weaponAmmo = 10;
while (weaponAmmo > 3) {
	console.log(playerName + " takes a shot at the hostiles, " + weaponAmmo + " bullets left in the current clip.");
	weaponAmmo--;
};
console.log("Fearing he may be low on rounds, " + playerName + " decided to take a quick look at what's left.");
console.log(playerName + " pulls the spare clip from his back pocket out and takes a quick glance.")
var spareClip = 15;
if (spareClip > 10){
	console.log("With the spare clip quite close to full, " + playerName + " decides to not add any more rounds in the spare and continue firing against the hostiles.")
} else {
	console.log("With not enough rounds in the spare " + playerName +" decides he must make time to fill up the spare clip which could leave him open to the enemy.");
};
console.log("Finishing the current rounds in his clip, " + playerName + " begins to reload.");
console.log("The spare clip being his only one, " + playerName + " knows he's going to have to be careful with the last of this ammo.");
var enemyCount = 3,
	playerMaxAmmo = 15,
	playerMaxShot;
playerMaxShot = Math.floor(playerMaxAmmo/enemyCount);
console.log(playerName + " knows that he can't go over " + playerMaxShot + " rounds per each enemy hostile.");
for (var enemyDeath = 3; enemyDeath > 0; enemyDeath--) {
	console.log(enemyDeath + " still remain, " + playerName + " fires off " + playerMaxShot + " rounds at the target.");
};
console.log("No more remain and now " + playerName + " can rest for a bit.");
console.log("After a moment of silence, " + playerName + " hears rustling in the bushes near him.");
var rescuePlayer = function(name) {
	var enemiesPresent = 0,
		enemyDeath,
		foundYou;
		if (enemiesPresent > 0){ 
		enemyDeath = 0; 
		} else {enemyDeath = 3};
	foundYou = playerPartner + " came out of the bushes, hands high. \"" + name + " it's me, " + playerPartner + "! I can't believe you took down all " + enemyDeath + " hostiles!\"";
	return foundYou;
	};
var rescueEnd = rescuePlayer(playerName);
console.log(rescueEnd);
console.log(playerName + " lowered his weapon and smiled, glad that he is no longer alone.");