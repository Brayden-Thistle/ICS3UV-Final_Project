/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-13
 * @fileoverview this 
 */

let choice: string;
let correctanswer: string;
let guess3 = "";
let totalpoints = 0;
const percentage = (totalpoints / 10) * 100
let points = 150;

const numbers: string[] = ["1","2","3","4","5","6","7","8","9","10"]

const History1: string[] = ["When did WW1 start ?", "What sparked WW2?", "When was Canada founded?", "What is D-Day?", "Who was the first PM of Canada?", "Who is responsible for authorizing the dropping of the 2 atomic bombs on Hiroshima and Nagasaki during WW2?", "What was the Winnipeg General Strike?", "What was the fur trade?", "What are residential schools?", "What is the Quiet revolution about?"];
const Music: string[] = ["Who popularized the Moon Walk?", "what is the most popular music genre", "What song has the most streams on Spotify?", "What is the best selling album of all time?", "What is a Vinyl Record?", "When did rock music emerge?", "Who is the lead singer of KISS", "What artist has the most grammy nominations?", "What is Eminem's most famous song?", "Who founded Bad Boy Records?"];
const Games: string[] = ["What game has the record for the most consecutive players?", "What game has the most sold copies?", "What is the best selling console of all time?", "What company created the Mario franchise?", "What company owns Xbox?", "What video game is known for having Lara Croft?’", "What game involves a yellow circle that eats things that look like tic-tacs and runs away from ghosts?", "When was Nintendo founded?", "What video game popularized a movement method called tap strafing?", "What was the first console ever?"];

const HistoryAnswer: string[] = ["A", "C", "D", "A", "B", "C", "C", "B", "A", "D"]
const MusicAnswer: string[] = ["D", "A", "A", "C", "B", "D", "B", "C", "D", "B"]
const GamesAnswer: string[] = ["C", "D", "D", "B", "D", "A", "A", "C", "C", "D"]

const HistoryOptions: string[] = ["A.July 18, 1914.  B.July 14, 1912.  C.July 31, 1918.  D.August 11, 1938"]
const MusicOptions: string[] = []
const GamesOptions: string[] = []

const genre1 = String("History")
const genre2 = String("Music")
const genre3 = String("Games")

function grade(totalpoints: number): string {
  if (totalpoints < 500) {
  return ("You performed under average.");
  } else if (totalpoints < 1000) {
    return ("You performed average.");
  } else {
    return ("You performed perfectly. Congratulations!");
  }
}


console.log("Welcome to my trivia game! You have 3 genres to chose from. Music, Games or History.");
console.log("each gengre has 10 questions that are each wroth 150 points. you will keep guessing the answer to each question until you are correct, however you will lose 50 points after each guess.");
console.log("at the end of the game, you will me told how many points you earned and you will be told how good you did based on the amount of points you have.");
choice = String(prompt("What genre do you choose:"));

if (genre1 === choice) {
  console.log("You have chosen History");

  for (let currentnumber = 0; currentnumber < 10; currentnumber++) {
  let points = 150;
  let guess3 = "";
  console.log(`Question ${numbers[currentnumber]}: ${History1[currentnumber]}`)
    console.log(HistoryOptions[currentnumber]);
    while (guess3 !== HistoryAnswer[currentnumber]) {
      guess3 = String(prompt("enter your answer here:")); 
      if (guess3 === HistoryAnswer[currentnumber]) {
        console.log("you guessed the right answer!")
        console.log(`you earned ${points} points`)
        totalpoints += points
      } else {
        points -= 50
        console.log("incorrect, try again.")
      }
    }
  }
}

correctanswer = String("")


if (genre2 === choice) {
  console.log("You have chosen music.");

  console.log("Question 1:")

}

if (genre3 === choice) {
  console.log("You have chosen Games.");

  console.log("Question 1:")

}


