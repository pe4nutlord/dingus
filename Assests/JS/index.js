var says = [
  "Is That a dingus Reference?",
  "Your one and only Unbl0cked Playground",
  "I hate working on dingus",
  "Better than Bypass",
  "GD 2.2 OCTOBER 2023!!!",
  "yowoodTodd",
  "Bot",
  "DINGUS!!!",
  "stop asking where disc0rd is. its in widgetbot",
  "blogs was usless",
  "so was secrets",
  "Tempus fugit ⏰",
  "no it's not open-source",
  "no you shouldnt skid it",
  "what do i add?",
  "*you're* 👆🤓",
  "idk how many games are in this lol",
  "optimized by dingus",
  "archiving piksulh soon",
  "thanks for loving dingus",
  "i cant use fontawesome because of you guys :(",
  "LunarOS 🔛🔝",
  "google adsense doesnt work",
  "uh",
  "Visual Studio Code is the Best",
  "School's Pretty Boring tbh",
  "This Website's Trash", 
  "i took too long making this :(", 
  "AOSUDHbjfbfgjbgjvch6gvb53iASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
  "you shouldn't do your work", 
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :P",
  "hiiii",
  "i hate myself",
  "im in love with a emo gorl 💅",
  "amog",
  "💀",
  "hey dadd-",
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingIPAddress;
      says.push(`umm your ip: ${ipAddress}`);
      splashText();
    });
});
