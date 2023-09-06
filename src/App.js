import React, { useEffect, useState } from 'react';
import './App.css';


function App() {


  const [count, setCount] = useState(0);
  const [Box, setBox] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [Winner, setWinner] = useState("");


  function change(index) {

    if (Box[index] !== "") return;

    setBox((Box) => {
      return Box.map((val, i) => {
        if (i === index) return player;
        return val;
      });

    });

    if (player === "X") {
      document.querySelector(".X").style.color = "#243163";
      document.querySelector(".o").style.color = "#32df1c";
    } else if (player === "O") {
      document.querySelector(".X").style.color = "green";
      document.querySelector(".o").style.color = "#243163";
    }


    setPlayer(player === "X" ? "O" : "X");




  };

  const checkWin = () => {
    //row
    if (Box[0] && Box[0] === Box[1] && Box[0] === Box[2]) {
      setCount(1);
      return Box[0] + " takes the game!"
    }
    else if (Box[3] && Box[3] === Box[4] && Box[3] === Box[5]) {
      setCount(1);
      return Box[3] + " takes the game!";
    }
    else if (Box[6] && Box[6] === Box[7] && Box[6] === Box[8]) {
      setCount(1);
      return Box[6] + " takes the game!";
    }

    //column
    else if (Box[0] && Box[0] === Box[3] && Box[0] === Box[6]) {
      setCount(1);
      return Box[0] + " takes the game!";
    }
    else if (Box[1] && Box[1] === Box[4] && Box[1] === Box[7]) {
      setCount(1);
      return Box[1] + " takes the game!";
    }
    else if (Box[2] && Box[2] === Box[5] && Box[2] === Box[8]) {
      setCount(1);
      return Box[2] + " takes the game!";
    }

    //Diagonals
    else if (Box[0] && Box[0] === Box[4] && Box[0] === Box[8]) {
      setCount(1);
      return Box[0] + " takes the game!";
    }
    else if (Box[2] && Box[2] === Box[4] && Box[2] === Box[6]) {
      setCount(1);
      return Box[2] + " takes the game!";
    }
    else if (Box[0] && Box[1] && Box[2] && Box[3] && Box[4] && Box[5] && Box[6] && Box[7] && Box[8] !== "") {
      setCount(1);
      return "Tie !"
    }


  };

  useEffect(() => {

    var result = checkWin();
    setWinner(result);

  }, [Box]);

  if (count === 1) {
    document.querySelector(".result-contain").style.display = "grid";
    document.querySelector(".X").style.color = "#243163";
    document.querySelector(".o").style.color = "#243163";
  }


  const reset = () => {
    setBox(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X")
    setCount(0)
    document.querySelector(".board").style.display = "grid";
    document.querySelector(".result-contain").style.display = "none";
    document.querySelector(".X").style.color = "green";
    document.querySelector(".o").style.color = "#243163"
  }





  return (

    <>
      <div className='nav'>
        <p className='title'>tic-tac-toe.</p>
        <button className='reset' onClick={() => { reset() }}>Reset</button>
      </div>
      <div className='window'>
        <div className='X'>X</div>
        <div className='board'>
          {
            Box.map((val, i) => <div className="board_box " id='remove' onClick={() => { change(i) }}>{val}</div>)

          }

        </div>
        <div className='o'>O</div>
      </div >

      <div className='result-contain'>
        {Winner}
      </div >

    </>
  );
}

export default App;
