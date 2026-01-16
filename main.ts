/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-13
 * @fileoverview this program is a trivia game that has 3 genres and 10 questions for each genre. you are asked multiple choice questions and will be evaluated at the end of the game
 */

let totalpoints = 0;

//History, Music and Games questions
const History1: string[] = ["When did WW1 start ?", "What sparked WW2?", "When was Canada founded?", "What is D-Day?", "Who was the first PM of Canada?", "Who is responsible for authorizing the dropping of the 2 atomic bombs on Hiroshima and Nagasaki during WW2?", "What was the Winnipeg General Strike?", "What was the fur trade in Canada?", "What are residential schools?", "What is the Quiet revolution about?"];
const Music: string[] = ["Who popularized the Moon Walk?", "what is the most popular music genre", "What song has the most streams on Spotify?", "What is the best selling album of all time?", "What is a Vinyl Record?", "When did rock music emerge?", "Who is the lead singer of KISS", "What artist has the most grammy nominations?", "What is Eminem's most famous song?", "Who founded Bad Boy Records?"];
const Games: string[] = ["What game has the record for the most consecutive players?", "What game has the most sold copies?", "What is the best selling console of all time?", "What company created the Mario franchise?", "What company owns Xbox?", "What video game is known for having Lara Croft?’", "What game involves a yellow circle that eats things that look like tic-tacs and runs away from ghosts?", "When was Nintendo founded?", "What video game popularized a movement method called tap strafing?", "What was the first console ever?"];


//History options for each question
const HistoryOptions: string[] = [
  "A.July 18, 1914.  B.July 14, 1912.  C.July 31, 1918.  D.August 11, 1938",
  "A.Assasination of Franz Ferdinand.  B.France attacked Germany.  C.Germany's invasion of Poland.  D.Joseph Stalin attacked Berlin.",
  "A.October 1st 1881.  B.July 4th 1834  C.July 4th 1967.  D.July 1st 1867",
  "A.The invasion of Normandy in France.  B. The day the 2 nuclear bombs dropped on Japan.  C.The day the Führerbunker was stormed.  D.The Chernobyl disaster.",
  "A.Justin Trudeau.  B.John A. Macdonald.  C.Terry Fox.  D.George Washington",
  "A.Albert Einstein.  B. J. Robert Oppenheimer.  C.Harry S. Truman.  D.Alexander Graham Bell.",
  "A.When the Stock Market crashed.  B.Prohibition.  C.Labour strike for better wages and working conditions.  D.A strike against the government for better healthcare.",
  "A.People traded animals for livestock.  B.The exchange of goods for valuable furs.  C.An illegal animal exchange.  D.Where women trade coats",
  "A.Schools for indigenous children forced to be assimilated with Canadian culture.  B.regular school like every other.  C. A private school for prestigious students.  D. A school for the less fortunate.",
  "A.A time where people hated being quiet.  B.Where a large group of people revolted to gain more freedom.  C.People of Quebec were tired of the Government not listening to them.  D.The Government took over areas that were dominated by the Catholic Church.",]

//Music options for each question
const MusicOptions: string[] = [
  "A.Madonna.  B.Stevie Wonder.  C.Janet Jackson  D.Michael Jackson.",
  "A.Pop.  B.Hard Rock.  C.Heavy Metal.  D.Rap.",
  "A.Blinding Lights by The Weekend.  B.Rap God by Eminem.  C.Mr.Brightside by The Killers.  D.Umbrella by Rihanna and JAY-Z.",
  "A.Back in Black by AC/DC.  B.The Dark Side of the Moon by Pink Floyd.  C.Thriller by Michael Jackson.  D.Bat Out of Hell by Meat Loaf.",
  "A.A Compact Disc.  B.A disc that encodes sound waves using a needle to read the vibrations  C.A plastic shell with magnetic tape on two spools.  D.Shellac Records",
  "A.1920's.  B. 1880s.  C. 1970s.  D. 1940s",
  "A.James Hetfield.  B.Paul Stanley.  C.Vinnie Vincent.  D.Peter Criss",
  "A.Kanye West.  B.JAY-Z.  C.Beyoncé. D.Quincy Jones",
  "A.The Real Slim Shady.  B.Rap God.  C.Mockingbird.  D.Lose Yourself",
  "A.Kendrick Lamar.  B.Sean Combs(Diddy).  C.2Pac.  D.Kanye West",]

//Games options for each question
const GamesOptions: string[] = [
  "A. Fortnite.  B. Elden Ring.  C. Grow A Garden.  D.ARC Raiders",
  "A.Super Smash Bros Brawl.  B.Call of Duty Black Ops 2.  C.Lethal Company.  D.Minecraft",
  "A.Playstation4.  B.Nintendo DS.  C.Xbox 360.  D.PlayStation2",
  "A.Sega.  B.Nintendo  C.Sony.  D.Electronic Arts",
  "A.Sony.  B.Ubisoft.  C.Epic Games.  D.Microsoft",
  "A.Tomb Raider.  B.Resident Evil.  C.Final Fantasy VII.  D. The Legend of Zelda.",
  "A.Pacman.  B.Frogger.  C.Donkey Kong.  D.Centipede.",
  "A.1990.  B.2001.  C.1889.  D. 1963.",
  "A.Titanfall.  B.CS:GO.  C. Apex Legends.  D.Team Fortress 2.",
  "A.The Game Cube.  B.Atari 2600.  C.The Wii  D.Magnavox Odyssey.",]

//History, Music and Games answers
const HistoryAnswer: string[] = ["A", "C", "D", "A", "B", "C", "C", "B", "A", "D"]
const MusicAnswer: string[] = ["D", "A", "A", "C", "B", "D", "B", "C", "D", "B"]
const GamesAnswer: string[] = ["C", "D", "D", "B", "D", "A", "A", "C", "C", "D"]

//topics
const genre1 = "History";
const genre2 = "Music";
const genre3 = "Games";

//function to print how good the user did
function grade(totalpoints: number): string {
  if (totalpoints < 500) {
  return ("You performed under average.");
  } else if (totalpoints < 1000) {
    return ("You performed average.");
  } else if (totalpoints < 1350) {
  return ("You performed almost perfect!");
  } else {
  return ("You performed perfectly! That's quite the accomplishment!");
  }
}
//function to calculate totalpoints
function percentage(totalpoints: number): number {
  return (totalpoints / 1500) * 100
}

//Intro to the trivia game
console.log("Welcome to my trivia game! You have 3 genres to choose from. Music, Games or History.");
console.log("Each genre has 10 questions that are each worth 150 points. You will keep guessing the answer to each question until you are correct, however you will lose 50 points after each guess.");
console.log("At the end of the game, you will be told how many points you earned and you will be told how good you did based on the amount of points you have.");
console.log("You will answer each question with A,B,C or D");
const choice = (prompt("What genre do you choose:") ?? "").toLowerCase();

//History genre loop
if (genre1.toLowerCase() === choice) {
  console.log("You have chosen History");
  for (let currentnumber = 0; currentnumber < 10; currentnumber++) {
    let points = 150;
    let guess = "";
    console.log(`Question ${currentnumber + 1}: ${History1[currentnumber]}`)
    console.log(HistoryOptions[currentnumber]);
    while (guess !== HistoryAnswer[currentnumber]) {
      guess = (prompt("enter your answer here:") ?? "").toLowerCase(); 
      if (guess === HistoryAnswer[currentnumber].toLowerCase()) {
        console.log("you answered the right answer!");
        console.log(`you earned ${points} points`);
        totalpoints += points
      } else {
        points -= 50
        console.log("incorrect, try again.");
      }
    }
  }
}

//Music Genre loop
else if (genre2.toLowerCase() === choice) {
  console.log("You have chosen Music");
  for (let currentnumber = 0; currentnumber < 10; currentnumber++) {
    let points = 150;
    let guess = "";
    console.log(`Question ${currentnumber + 1}: ${Music[currentnumber]}`)
    console.log(MusicOptions[currentnumber]);
    while (guess !== MusicAnswer[currentnumber]) {
      guess = (prompt("enter your answer here:") ?? "").toLowerCase();
      if (guess === MusicAnswer[currentnumber].toLowerCase()) {
        console.log("you answered the right answer!");
        console.log(`you earned ${points} points`);
        totalpoints += points
      } else {
        points -= 50
        console.log("incorrect, try again.");
      }
    }
  }
}

//Games genre loop
else if (genre3.toLowerCase() === choice) {
  console.log("You have chosen Games");
  for (let currentnumber = 0; currentnumber < 10; currentnumber++) {
    let points = 150;
    let guess = "";
    console.log(`Question ${currentnumber + 1}: ${Games[currentnumber]}`)
    console.log(GamesOptions[currentnumber]);
    while (guess !== GamesAnswer[currentnumber]) {
      guess = (prompt("enter your answer here:") ?? "").toLowerCase();
      if (guess === GamesAnswer[currentnumber].toLowerCase()) {
        console.log("you answered the right answer!");
        console.log(`you earned ${points} points`);
        totalpoints += points
      } else {
        points -= 50
        console.log("incorrect, try again.");
      }
    }
  }
}

//to let the user know what they typed is incorrect
else {
  console.log("This does not work.");
}

//saying the end of the game along with the points and percentage with the grade.
console.log("That is the end of the game!");
console.log(`You earned ${totalpoints} points and got ${percentage(totalpoints).toFixed(2)}%`);
console.log(grade(totalpoints));
console.log("That is the end of the game. I hope you enjoyed it!");
console.log("\nDone.");
