const state = {
    view: {
      squares: document.querySelectorAll(".square"),
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score"),
    },
    values: {
      gameVelocity: 600,
      hitPosition: 0,
      result: 0,
      curretTime: 60,
    },
    actions: {
      timerId: setInterval(randomSquare, 600),
      countDownTimerId: setInterval(countDown, 600),
    },
  };
  
  function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
  
    if (state.values.curretTime <= 0) {
      clearInterval(state.actions.countDownTimerId);
      clearInterval(state.actions.timerId);
      alert("SEU TEMPO ACABOU!! O seu resultado foi: " + state.values.result);
      resetGame();
    }
  }
  
  function resetGame() {
    state.values.curretTime = 60;
    state.view.timeLeft.textContent = state.values.curretTime;
    state.values.result = 0;
    state.view.score.textContent = state.values.result;
 
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  

    state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
    state.actions.countDownTimerId = setInterval(countDown, 600);
  }
  
  function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
  }
  
  function randomSquare() {
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
  }
  
  function moveEnemy() {
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
  }
  
  function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit");
        }
      });
    });
  }
  
  function init() {
    moveEnemy();
    addListenerHitBox();
  }
  
  init();
  