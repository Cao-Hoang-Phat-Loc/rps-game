import React, { useState } from "react";
import "./App.css";
function App() {
  const [choice, setChoice] = useState("");
  const cpChoice = [
    {
      winItemId: "Rock",
      name: "Paper",
    },
    {
      winItemId: "Scissor",
      name: "Rock",
    },
    {
      winItemId: "Paper",
      name: "Scissor",
    },
  ];
  
  // r>s  ||  s>p   ||    p>k
  const rock = () => setChoice(cpChoice[1]);
  const paper = () => setChoice(cpChoice[0]);
  const scissors = () => setChoice(cpChoice[2]);
  
  const resultGame = ["Thắng", "Thua", "Hoa"];
  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * cpChoice.length);
    return cpChoice[randomIndex];
  };
  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice.name === computerChoice.name) {
      return resultGame[2]; // Hòa
    }
    if(playerChoice.winItemId===computerChoice.name){
      return resultGame[0];
    }
    if(computerChoice.winItemId===playerChoice.name){
      return resultGame[1];
    }
  };
  const computerChoicex=getRandomChoice();
  console.log(choice);
  console.log(computerChoicex);
  return (
    <div class="game-container">
      <h1>Kéo Búa Bao</h1>
      <div className="choices">
        <button onClick={rock} className="choice" id="rock">
          rock
        </button>
        <button onClick={paper} className="choice" id="paper">
          paper
        </button>
        <button onClick={scissors} className="choice" id="scissors">
          scissors
        </button>
      </div>
      <div className="result">
        <div className="choice-display" id="playerChoice">
          <p>Bạn chọn:</p>
          <div id="playerIcon">{choice.name}</div>
        </div>
        <div className="choice-display" id="playerChoice">
          <div id="result">{getResult(choice,computerChoicex)}</div>
        </div>
        <div className="choice-display" id="computerChoice">
          <p>Máy chọn:</p>
          <div id="computerIcon">{computerChoicex.name}</div>
        </div>
      </div>
      <p className="result-message" id="resultMessage">
        Chọn đi!
      </p>
      <p className="score" id="score">
        Điểm: 0
      </p>
    </div>
  );
}

export default App;
